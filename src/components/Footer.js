import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: "#D4A373", padding: "2rem 0", marginTop: "4rem", fontFamily: "Arial, sans-serif" }}>
      <div className="container">
        <div className="row text-center text-md-start">
          {}
          <div className="col-md-4 mb-3">
            <h5 style={{ color: "#333" }}>About</h5>
            <p style={{ color: "#333" }}>
              HerStyle is a daily women's lifestyle site that inspires connection and authenticity through stories on style, culture, food, relationships, and parenting.
            </p>
          </div>

          {}
          <div className="col-md-4 mb-3">
            <h5 style={{ color: "#333" }}>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" style={{ color: "#333", textDecoration: "none" }}>Home</a>
              </li>
              <li>
                <a href="/blog" style={{ color: "#333", textDecoration: "none" }}>Blog</a>
              </li>
              <li>
                <a href="/about" style={{ color: "#333", textDecoration: "none" }}>About</a>
              </li>
              <li>
                <a href="/contact" style={{ color: "#333", textDecoration: "none" }}>Contact</a>
              </li>
            </ul>
          </div>

          {}
          <div className="col-md-4 mb-3">
            <h5 style={{ color: "#333" }}>Contact Us</h5>
            <p style={{ color: "#333" }}>
              <i className="bi bi-geo-alt-fill me-2"></i>Angeles University Foundation
            </p>
            <p style={{ color: "#333" }}>
              <i className="bi bi-telephone-fill me-2"></i>+63 9875472431
            </p>
            <p style={{ color: "#333" }}>
              <i className="bi bi-envelope-fill me-2"></i>
              <a href="mailto:info@myblog.com" style={{ color: "#333", textDecoration: "none" }}>
                herstyle@blog.com
              </a>
            </p>
          </div>
        </div>

        <hr className="text-white" />

        {}
        <div className="text-center">
          <p style={{ color: "#333" }}>&copy; 2024 HerStyle. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
