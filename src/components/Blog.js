import { useState, useEffect } from "react";
import { openDB } from "idb";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  // Get the currently logged-in user's email
  const currentUserEmail = JSON.parse(localStorage.getItem("currentUser"))?.email;

  // Open the IndexedDB database
  const dbPromise = openDB("blogDB", 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("posts")) {
        db.createObjectStore("posts", { keyPath: "id", autoIncrement: true });
      }
    },
  });

  // Fetch posts for the current user from IndexedDB
  const loadPosts = async () => {
    if (!currentUserEmail) return; // Ensure a user is logged in
    const db = await dbPromise;
    const allPosts = await db.getAll("posts");
    // Filter posts by the logged-in user's email and sort them
    const userPosts = allPosts.filter((post) => post.userEmail === currentUserEmail);
    setPosts(userPosts.sort((a, b) => b.id - a.id)); // Sort in descending order by ID
  };

  // Save a new post to IndexedDB
  const savePost = async (post) => {
    const db = await dbPromise;
    await db.add("posts", post);
    loadPosts(); // Reload posts after saving
  };

  // Delete a post from IndexedDB
  const deletePost = async (id) => {
    const db = await dbPromise;
    await db.delete("posts", id);
    loadPosts(); // Reload posts after deletion
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title,
      content,
      image,
      timestamp: new Date().toLocaleString(),
      userEmail: currentUserEmail, // Associate the post with the current user
    };
    savePost(newPost); // Save the new post
    setTitle("");
    setContent("");
    setImage(null); // Reset the image input
  };

  // Handle image upload
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

  // Load posts on component mount
  useEffect(() => {
    loadPosts();
  }, [currentUserEmail]); // Reload posts if the current user changes

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Welcome to Your Blog</h2>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm">
        <h4>Add a New Post</h4>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Content</label>
          <textarea
            className="form-control"
            rows="5"
            placeholder="Write your content here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Add a Photo</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={handleImageUpload}
          />
          {image && (
            <div className="mt-3 text-center">
              <img
                src={image}
                alt="Preview"
                className="img-fluid rounded"
                style={{ maxHeight: "200px" }}
              />
            </div>
          )}
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Add Post
        </button>
      </form>

      {/* Posts Section */}
      <div className="mt-5">
        <h3 className="text-center mb-4">All Posts</h3>
        {posts.length === 0 ? (
          <p className="text-center text-muted">No posts yet. Add one to get started!</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="card mb-3 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                {post.image && (
                  <div className="text-center mb-3">
                    <img
                      src={post.image}
                      alt="Post"
                      className="img-fluid rounded"
                      style={{ maxHeight: "300px" }}
                    />
                  </div>
                )}
                <p className="card-text">{post.content}</p>
                <small className="text-muted">Posted on {post.timestamp}</small>
                <div className="text-end mt-3">
                  <button
                    onClick={() => deletePost(post.id)}
                    className="btn btn-outline-danger btn-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Blog;
