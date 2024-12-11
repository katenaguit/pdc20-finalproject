import { NavLink, useNavigate } from "react-router-dom";

const Header = ({ loggedIn, onLogout }) => {
  const navigate = useNavigate(); // Initialize useNavigate for programmatic navigation

  const handleLogout = () => {
    onLogout(); 
    navigate("/login"); 
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#D4A373" }}>
      <div className="container">
        <NavLink
          className="navbar-brand"
          to="/"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: "bold",
            fontSize: "28px",
            color: "white"
          }}
        >
          <span style={{ color: "#FAEDCD" }}>Her</span>Style
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
                style={({ isActive }) => (isActive ? { borderBottom: "2px solid #FAEDCD" } : {})}
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
                    style={({ isActive }) => (isActive ? { borderBottom: "2px solid #FAEDCD" } : {})}
                  >
                    Profile
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/blog"
                    style={({ isActive }) => (isActive ? { borderBottom: "2px solid #FAEDCD" } : {})}
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
                style={({ isActive }) => (isActive ? { borderBottom: "2px solid #FAEDCD" } : {})}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/contact"
                style={({ isActive }) => (isActive ? { borderBottom: "2px solid #FAEDCD" } : {})}
              >
                Contact
              </NavLink>
            </li>
            {loggedIn ? (
              <li className="nav-item">
                <button
                  className="btn btn-outline-light nav-link"
                  onClick={handleLogout} 
                >
                  Logout
                </button>
              </li>
            ) : (
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/login"
                  style={({ isActive }) => (isActive ? { borderBottom: "2px solid #FAEDCD" } : {})}
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
