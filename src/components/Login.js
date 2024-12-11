import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); // Success message state
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      setError("");
      setSuccess(`Welcome back, ${user.firstName}! Redirecting to blogs...`);
      localStorage.setItem("loggedIn", "true"); // Set login status
      localStorage.setItem("currentUser", JSON.stringify(user)); // Store user info
      onLogin(); // Notify parent component about login

      // Redirect to the profile page after a brief delay
      setTimeout(() => navigate("/blog"), 2000);
    } else {
      setError("Invalid email or password. Please try again.");
      setSuccess(""); // Clear success message
    }
  };

  return (
    <div className="container mt-5">
      {/* Hero Section */}
      <div className="text-center mb-4">
        <h1 className="fw-bold">Welcome Back</h1>
        <p className="text-muted">Please login to access your account.</p>
      </div>

      {/* Login Form Section */}
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm p-4">
            <h3 className="text-center mb-4">Login</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <div className="alert alert-danger">{error}</div>}
              {success && <div className="alert alert-success">{success}</div>}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <Link to="/forgot-password" className="text-decoration-none">
                  Forgot Password?
                </Link>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </form>
            <div className="text-center mt-3">
              <p className="mb-0">
                Don’t have an account?{" "}
                <Link to="/register" className="text-primary text-decoration-none">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
