import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ maxWidth: "1200px", margin: "2rem auto", fontFamily: "Arial, sans-serif" }}>
      {}
      <header style={{ backgroundColor: "#D4A373", color: "#fff", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", padding: "2rem 0", textAlign: "center", borderRadius: "8px" }}>
        <h1 style={{ fontWeight: "bold", fontSize: "2.5rem" }}>HerStyle</h1>
        <p style={{ marginBottom: "0" }}>Your daily lifestyle destination, where authentic stories and meaningful connections thrive.</p>
      </header>

      {}
      <section style={{ backgroundColor: "#FAEDCD", height: "60vh", color: "#2d3748", display: "flex", alignItems: "center", textAlign: "center", padding: "2rem 0", borderBottom: "1px solid #E9EDC9" }}>
        <div className="container">
          <h1 style={{ fontWeight: "bold", fontSize: "2.5rem" }}>Explore, Inspire, Belong</h1>
          <p style={{ marginBottom: "1rem" }}>Your daily destination for stories that connect, empower, and uplift.</p>
          <div>
            <Link to="/login" className="btn btn-outline-dark mx-2" style={{ padding: "0.5rem 1.5rem", borderColor: "#D4A373", color: "#D4A373" }}>Sign In</Link>
            <Link to="/register" className="btn btn-dark mx-2" style={{ padding: "0.5rem 1.5rem", backgroundColor: "#D4A373", color: "#fff" }}>Sign Up</Link>
          </div>
        </div>
      </section>

      {}
      <section style={{ backgroundColor: "#fff", color: "#2d3748", padding: "5rem 0", textAlign: "center", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}>
        <div className="container">
          <h2 style={{ fontWeight: "bold", marginBottom: "2rem" }}>Why HerStyle?</h2>
          <p style={{ marginBottom: "3rem" }}>HerStyle has been a trusted space for women to explore style, culture, food, travel, relationships, and parenting. We've built a deeply engaged community that comes for the blog but stays for the comments.</p>
          <div className="row g-4">
            {[{
                icon: "bi-pencil-square",
                title: "Inspired and Be Inspired",
                description: "At HerStyle, we believe in the power of sharing. From personal essays to relatable stories, our content inspires connection and a deeper understanding of life."
              }, {
                icon: "bi-globe",
                title: "Explore and Enjoy",
                description: "Discover a curated mix of fashion tips, cultural insights, parenting advice, travel guides, and more. Every post is crafted to inform, entertain, and empower."
              }, {
                icon: "bi-people",
                title: "Join the Conversation",
                description: "Be part of a community that values connection and kindness. Engage with thoughtful discussions in the comments or reach out directly, we'd love to hear from you."
            }].map((feature, index) => (
              <div className="col-md-4" key={index}>
                <div className="feature-card p-4 rounded shadow-sm" style={{ background: "#FAEDCD", border: "1px solid #E9EDC9", color: "#2d3748", borderRadius: "8px" }}>
                  <div className="icon mb-3"><i className={`bi ${feature.icon} fs-3`}></i></div>
                  <h5 style={{ fontWeight: "bold" }}>{feature.title}</h5>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section style={{ backgroundColor: "#fff", color: "#2d3748", padding: "5rem 0", borderTop: "1px solid #e2e8f0" }}>
        <div className="container text-center">
          <h2 style={{ fontWeight: "bold", marginBottom: "2rem" }}>What Our Users Say</h2>
          <p style={{ marginBottom: "3rem" }}>Hear from our community</p>
          <div className="row g-4">
            {[{
                text: "HerStyle feels like a warm hug. The stories are relatable, and the community is so supportive.",
                author: "Sophia T."
              }, {
                text: "I come for the fashion and parenting tips, but I stay for the thoughtful discussions in the comments.",
                author: "Maria L."
              }, {
                text: "HerStyle inspires me every day with its mix of real stories, practical advice, and kindness.",
                author: "John K."
            }].map((testimonial, index) => (
              <div className="col-md-4" key={index}>
                <div className="testimonial-card p-4 rounded shadow-sm" style={{ background: "#FAEDCD", border: "1px solid #E9EDC9", borderRadius: "8px" }}>
                  <p>"{testimonial.text}"</p>
                  <h6 style={{ fontWeight: "bold" }}>- {testimonial.author}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section style={{ background: "#D4A373", color: "white", padding: "5rem 0", textAlign: "center" }}>
        <h2 style={{ fontWeight: "bold" }}>Start Your Journey with HerStyle</h2>
        <p>Whether you're here for inspiration, laughter, or a sense of belonging, we're thrilled to have you.</p>
        <Link to="/register" className="btn btn-light fw-bold" style={{ padding: "0.75rem 2rem", borderColor: "white", color: "#D4A373", fontWeight: "bold" }}>Get Started</Link>
      </section>
    </div>
  );
};

export default Home;
