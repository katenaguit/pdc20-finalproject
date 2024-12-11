import { useLocation, useNavigate } from "react-router-dom";

const OtherBlogs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const blog = location.state?.blog;

  if (!blog) {
    navigate("/");
    return null;
  }

  return (
    <div className="container mt-5" style={{ padding: "2rem", backgroundColor: "#FAEDCD", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
      <div className="card shadow-sm">
        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="card-img-top"
            style={{ height: "300px", objectFit: "cover", borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}
          />
        )}
        <div className="card-body" style={{ padding: "1.5rem", backgroundColor: "#E9EDC9", borderBottomLeftRadius: "8px", borderBottomRightRadius: "8px" }}>
          <h3 className="card-title">{blog.title}</h3>
          <p className="card-text">{blog.content}</p>
          <hr />
          <small className="text-muted">Posted by: {blog.userEmail || "Unknown"}</small>
          <div className="text-end mt-3" style={{ textAlign: "right", marginTop: "1rem" }}>
            <button className="btn btn-primary" onClick={() => navigate(-1)} style={{ backgroundColor: "#D4A373", color: "white", border: "none", padding: "0.5rem 1rem", borderRadius: "4px", cursor: "pointer" }}>
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherBlogs;
