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

  
  useEffect(() => {
    const userLoggedIn = localStorage.getItem("loggedIn") === "true";
    setLoggedIn(userLoggedIn);
  }, []);

  
  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    setLoggedIn(false);
  };

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        {}
        <Header loggedIn={loggedIn} onLogout={handleLogout} />

        {}
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
            {}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>

        {}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
