import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); 
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      setError("");
      setSuccess(`Welcome back, ${user.firstName}! Redirecting to blogs...`);
      localStorage.setItem("loggedIn", "true"); 
      localStorage.setItem("currentUser", JSON.stringify(user)); 
      onLogin(); 

      
      setTimeout(() => navigate("/blog"), 2000);
    } else {
      setError("Invalid email or password. Please try again.");
      setSuccess(""); 
    }
  };

  return (
    <div style={{ maxWidth: "800px", margin: "2rem auto", fontFamily: "Arial, sans-serif" }}>
      {}
      <div
        style={{
          textAlign: "center",
          padding: "2rem",
          backgroundColor: "#FAEDCD",
          borderRadius: "8px",
          color: "#333",
        }}
      >
        <h1 style={{ fontWeight: "bold" }}>Welcome Back</h1>
        <p style={{ fontSize: "1.2rem", margin: "1rem 0" }}>
          Log in to access your account and explore new blogs.
        </p>
      </div>

      {}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        <div style={{ width: "100%", maxWidth: "500px" }}>
          <div
            style={{
              padding: "2rem",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              backgroundColor: "#FFF",
            }}
          >
            <h3 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
              Login to Your Account
            </h3>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: ".5rem" }}>
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    borderRadius: "4px",
                    border: "1px solid #CCD5AE",
                  }}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: ".5rem" }}>
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    borderRadius: "4px",
                    border: "1px solid #CCD5AE",
                  }}
                />
              </div>
              {error && (
                <div
                  style={{
                    padding: "0.75rem",
                    borderRadius: "4px",
                    color: "#721c24",
                    backgroundColor: "#f8d7da",
                    marginBottom: "1rem",
                  }}
                >
                  {error}
                </div>
              )}
              {success && (
                <div
                  style={{
                    padding: "0.75rem",
                    borderRadius: "4px",
                    color: "#155724",
                    backgroundColor: "#d4edda",
                    marginBottom: "1rem",
                  }}
                >
                  {success}
                </div>
              )}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <Link to="/forgot-password" style={{ color: "#D4A373", textDecoration: "none" }}>
                  Forgot Password?
                </Link>
              </div>
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  backgroundColor: "#D4A373",
                  border: "none",
                  borderRadius: "4px",
                  color: "#fff",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Login
              </button>
            </form>
            <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
              <p>
                Don’t have an account?{" "}
                <Link
                  to="/register"
                  style={{ color: "#D4A373", textDecoration: "none" }}
                >
                  Sign Up Here
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
