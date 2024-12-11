import { useState, useEffect } from "react";
import { openDB } from "idb";
import { useNavigate } from "react-router-dom";
import "./blogcards.css";


const LoggedInHome = () => {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const navigate = useNavigate();

  // Open the IndexedDB database
  const dbPromise = openDB("blogDB", 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("posts")) {
        db.createObjectStore("posts", { keyPath: "id", autoIncrement: true });
      }
    },
  });

  // Fetch all blogs from IndexedDB
  const loadBlogs = async () => {
    const db = await dbPromise;
    const allPosts = await db.getAll("posts");
    setBlogs(allPosts);
    setFilteredBlogs(allPosts);
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  // Handle Search Input
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);
    const results = blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(query) ||
        blog.content.toLowerCase().includes(query) ||
        blog.userEmail?.toLowerCase().includes(query) // Search by author's email
    );
    setFilteredBlogs(results);
  };

  // Handle Card Click
  const handleCardClick = (blog) => {
    navigate("/other-blogs", { state: { blog } });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Explore Blogs</h2>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search blogs by title, content, or author..."
          value={search}
          onChange={handleSearch}
        />
      </div>

      {/* Blog List */}
      <div className="row">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="col-md-4 mb-4"
              onClick={() => handleCardClick(blog)}
              style={{ cursor: "pointer" }} // Make the card clickable
            >
              <div className="card h-100 shadow-sm hover-effect">
                {blog.image && (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text">{blog.content.substring(0, 100)}...</p>
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
