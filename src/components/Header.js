import { NavLink, useNavigate } from "react-router-dom";

const Header = ({ loggedIn, onLogout }) => {
  const navigate = useNavigate(); // Initialize useNavigate for programmatic navigation

  const handleLogout = () => {
    onLogout(); // Call the parent logout handler
    navigate("/login"); // Redirect to the login page
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink
          className="navbar-brand"
          to="/"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: "bold",
            fontSize: "28px",
          }}
        >
          <span style={{ color: "blue" }}>Blog</span>Book
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
                style={({ isActive }) =>
                  isActive ? { borderBottom: "2px solid black" } : {}
                }
              >
                Home
              </NavLink>
            </li>
            {loggedIn && (
              <>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/profile"
                    style={({ isActive }) =>
                      isActive ? { borderBottom: "2px solid black" } : {}
                    }
                  >
                    Profile
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/blog"
                    style={({ isActive }) =>
                      isActive ? { borderBottom: "2px solid black" } : {}
                    }
                  >
                    My Blog
                  </NavLink>
                </li>
              </>
            )}
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about"
                style={({ isActive }) =>
                  isActive ? { borderBottom: "2px solid black" } : {}
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/contact"
                style={({ isActive }) =>
                  isActive ? { borderBottom: "2px solid black" } : {}
                }
              >
                Contact
              </NavLink>
            </li>
            {loggedIn ? (
              <li className="nav-item">
                <button
                  className="btn btn-outline-danger nav-link"
                  onClick={handleLogout} // Use the fixed logout handler
                >
                  Logout
                </button>
              </li>
            ) : (
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/login"
                  style={({ isActive }) =>
                    isActive ? { borderBottom: "2px solid black" } : {}
                  }
                >
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
