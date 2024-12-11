import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import LoggedInHome from "./components/LoggedInHome";
import Blog from "./components/Blog";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import OtherBlogs from "./components/OtherBlogs";
import Footer from "./components/Footer";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  // Check login status from localStorage on app load
  useEffect(() => {
    const userLoggedIn = localStorage.getItem("loggedIn") === "true";
    setLoggedIn(userLoggedIn);
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    setLoggedIn(false);
  };

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        {/* Header */}
        <Header loggedIn={loggedIn} onLogout={handleLogout} />

        {/* Main Content */}
        <div className="flex-grow-1">
          <Routes>
            <Route
              path="/"
              element={loggedIn ? <LoggedInHome /> : <Home />}
            />
            <Route
              path="/blog"
              element={loggedIn ? <Blog /> : <Navigate to="/login" />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/login"
              element={<Login onLogin={() => setLoggedIn(true)} />}
            />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/other-blogs" element={<OtherBlogs />} />
            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
