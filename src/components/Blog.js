import { useState, useEffect } from "react";
import { openDB } from "idb";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const currentUserEmail = JSON.parse(localStorage.getItem("currentUser"))?.email;

  const dbPromise = openDB("blogDB", 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("posts")) {
        db.createObjectStore("posts", { keyPath: "id", autoIncrement: true });
      }
    },
  });

  const loadPosts = async () => {
    if (!currentUserEmail) return;
    const db = await dbPromise;
    const allPosts = await db.getAll("posts");
    const userPosts = allPosts.filter((post) => post.userEmail === currentUserEmail);
    setPosts(userPosts.sort((a, b) => b.id - a.id));
  };

  const savePost = async (post) => {
    const db = await dbPromise;
    await db.add("posts", post);
    loadPosts();
  };

  const deletePost = async (id) => {
    const db = await dbPromise;
    await db.delete("posts", id);
    loadPosts();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title,
      content,
      image,
      timestamp: new Date().toLocaleString(),
      userEmail: currentUserEmail,
    };
    savePost(newPost);
    setTitle("");
    setContent("");
    setImage(null);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  
  useEffect(() => {
    loadPosts();
  }, [currentUserEmail]);

  return (
    <div className="container mt-5" style={{ padding: "2rem", backgroundColor: "#FAEDCD", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
      <h2 className="text-center mb-4" style={{ textAlign: "center", marginBottom: "1.5rem" }}>Welcome to Your Blog</h2>

      <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm" style={{ padding: "1.5rem", backgroundColor: "#E9EDC9", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)", marginBottom: "1.5rem" }}>
        <h4>Add a New Post</h4>
        <div className="mb-3" style={{ marginBottom: "1rem" }}>
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ width: "100%", padding: "0.75rem", border: "1px solid #D4A373", borderRadius: "4px" }}
          />
        </div>
        <div className="mb-3" style={{ marginBottom: "1rem" }}>
          <label className="form-label">Content</label>
          <textarea
            className="form-control"
            rows="4"
            placeholder="Write your content here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            style={{ width: "100%", padding: "0.75rem", border: "1px solid #D4A373", borderRadius: "4px" }}
          ></textarea>
        </div>
        <div className="mb-3" style={{ marginBottom: "1rem" }}>
          <label className="form-label">Add a Photo</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ width: "100%", padding: "0.75rem", border: "1px solid #D4A373", borderRadius: "4px" }}
          />
          {image && (
            <div className="mt-3 text-center" style={{ textAlign: "center", marginTop: "1rem" }}>
              <img
                src={image}
                alt="Preview"
                className="img-fluid rounded"
                style={{ maxHeight: "200px", borderRadius: "8px", objectFit: "cover" }}
              />
            </div>
          )}
        </div>
        <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: "#D4A373", color: "white", border: "none", padding: "0.5rem 1rem", borderRadius: "4px", cursor: "pointer" }}>Add Post</button>
      </form>

      <div className="mt-5" style={{ marginTop: "2rem" }}>
        <h3 className="text-center mb-4">All Posts</h3>
        {posts.length === 0 ? (
          <p className="text-center text-muted">No posts yet. Add one to get started!</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="card mb-3 shadow-sm" style={{ padding: "1rem", backgroundColor: "#E9EDC9", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)", marginBottom: "1.5rem" }}>
              <h5 className="card-title" style={{ marginBottom: "0.5rem" }}>{post.title}</h5>
              {post.image && (
                <div className="text-center mb-3" style={{ textAlign: "center", marginTop: "1rem" }}>
                  <img
                    src={post.image}
                    alt="Post"
                    className="img-fluid rounded"
                    style={{ maxHeight: "300px", borderRadius: "8px", objectFit: "cover" }}
                  />
                </div>
              )}
              <p className="card-text" style={{ marginBottom: "0.5rem" }}>{post.content}</p>
              <small className="text-muted">Posted on {post.timestamp}</small>
              <div className="text-end mt-3" style={{ textAlign: "right", marginTop: "1rem" }}>
                <button
                  onClick={() => deletePost(post.id)}
                  className="btn btn-outline-danger btn-sm"
                  style={{ backgroundColor: "#D4A373", color: "white", border: "none", padding: "0.25rem 0.5rem", borderRadius: "4px", cursor: "pointer" }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Blog;
