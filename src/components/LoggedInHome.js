import { useState, useEffect } from "react";
import { openDB } from "idb";
import { useNavigate } from "react-router-dom";

const LoggedInHome = () => {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const navigate = useNavigate();


  const dbPromise = openDB("blogDB", 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("posts")) {
        db.createObjectStore("posts", { keyPath: "id", autoIncrement: true });
      }
    },
  });

  
  const loadBlogs = async () => {
    const db = await dbPromise;
    const allPosts = await db.getAll("posts");
    setBlogs(allPosts);
    setFilteredBlogs(allPosts);
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);
    const results = blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(query) ||
        blog.content.toLowerCase().includes(query) ||
        blog.userEmail?.toLowerCase().includes(query)
    );
    setFilteredBlogs(results);
  };

  
  const handleCardClick = (blog) => {
    navigate("/other-blogs", { state: { blog } });
  };

  return (
    <div className="container mt-5" style={{ padding: "2rem", backgroundColor: "#FAEDCD", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
      <h2 className="text-center mb-4" style={{ color: "#D4A373" }}>Explore Blogs</h2>

      {}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search blogs by title, content, or author..."
          value={search}
          onChange={handleSearch}
          style={{
            border: "2px solid #E9EDC9",
            borderRadius: "8px",
            padding: "0.5rem",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
          }}
        />
      </div>

      {}
      <div className="row">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="col-md-4 mb-4"
              onClick={() => handleCardClick(blog)}
              style={{ cursor: "pointer" }}
            >
              <div className="card h-100 shadow-sm" style={{
                border: "1px solid #E9EDC9",
                borderRadius: "8px",
                overflow: "hidden",
                transition: "transform 0.2s ease-in-out",
                backgroundColor: "#E9EDC9"
              }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.03)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>
                {blog.image && (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover", borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}
                  />
                )}
                <div className="card-body" style={{ padding: "1rem", backgroundColor: "#FAEDCD" }}>
                  <h5 className="card-title" style={{ color: "#D4A373" }}>{blog.title}</h5>
                  <p className="card-text" style={{ color: "#6c757d" }}>{blog.content.substring(0, 100)}...</p>
                  <small className="text-muted">
                    Posted by: {blog.userEmail || "Unknown"}
                  </small>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">No blogs found.</p>
        )}
      </div>
    </div>
  );
};

export default LoggedInHome;
