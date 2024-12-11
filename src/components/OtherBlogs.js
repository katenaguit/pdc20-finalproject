import { useLocation, useNavigate } from "react-router-dom";

const OtherBlogs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const blog = location.state?.blog;

  if (!blog) {
    // Redirect to home if no blog data is available
    navigate("/");
    return null;
  }

  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="card-img-top"
            style={{ height: "300px", objectFit: "cover" }}
          />
        )}
        <div className="card-body">
          <h3 className="card-title">{blog.title}</h3>
          <p className="card-text">{blog.content}</p>
          <hr />
          <small className="text-muted">Posted by: {blog.userEmail || "Unknown"}</small>
          <div className="text-end mt-3">
            <button className="btn btn-primary" onClick={() => navigate(-1)}>
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherBlogs;
