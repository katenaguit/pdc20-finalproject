import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    emailjs
      .send(
        "service_vvmfovu",
        "template_j6abqnt",
        { name, email, subject, message },
        "Mqz3JnJd33k_pgyPY"
      )
      .then(
        (response) => {
          setStatus({ type: "success", message: "Message sent successfully!" });
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (err) => {
          setStatus({ type: "error", message: "Failed to send message. Please try again." });
        }
      );
  };

  return (
    <div style={{ margin: "2rem auto", maxWidth: "1200px", padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      {}
      <div style={{
        textAlign: "center",
        padding: "2rem",
        backgroundColor: "#CCD5AE",
        borderRadius: "8px",
        color: "#333"
      }}>
        <h1 style={{ fontWeight: "bold" }}>Get in Touch</h1>
        <p style={{ fontSize: "1.2rem", margin: "1rem 0" }}>
          We would love to hear from you. Fill out the form below or reach us through our contact information.
        </p>
      </div>

      {}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", marginTop: "2rem" }}>
        {}
        <div style={{ flex: "1", minWidth: "300px" }}>
          <div style={{
            padding: "2rem",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            backgroundColor: "#FAEDCD"
          }}>
            <h3 style={{ marginBottom: "1.5rem", textAlign: "center" }}>Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: ".5rem" }}>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #E9EDC9" }}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: ".5rem" }}>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #E9EDC9" }}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: ".5rem" }}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #E9EDC9" }}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: ".5rem" }}>Message</label>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #E9EDC9" }}
                ></textarea>
              </div>
              <button type="submit" style={{
                width: "100%",
                padding: "0.75rem",
                backgroundColor: "#D4A373",
                border: "none",
                borderRadius: "4px",
                color: "#fff",
                fontWeight: "bold",
                cursor: "pointer"
              }}>
                Send Message
              </button>
            </form>
            {status.message && (
              <div style={{
                marginTop: "1rem",
                padding: "0.75rem",
                borderRadius: "4px",
                color: status.type === "success" ? "#155724" : "#721c24",
                backgroundColor: status.type === "success" ? "#d4edda" : "#f8d7da"
              }}>
                {status.message}
              </div>
            )}
          </div>
        </div>

        {}
        <div style={{ flex: "1", minWidth: "300px" }}>
          <div style={{
            padding: "2rem",
            borderRadius: "8px",
            backgroundColor: "#FAEDCD",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
          }}>
            <h3 style={{ marginBottom: "1.5rem", textAlign: "center" }}>Contact Information</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "1rem", display: "flex" }}>
                <i className="bi bi-geo-alt-fill" style={{ color: "#D4A373", fontSize: "1.5rem", marginRight: "1rem" }}></i>
                <div>
                  <strong>Address:</strong>
                  <p>999 HerStyle Lane, Philippines, PH 10001</p>
                </div>
              </li>
              <li style={{ marginBottom: "1rem", display: "flex" }}>
                <i className="bi bi-telephone-fill" style={{ color: "#D4A373", fontSize: "1.5rem", marginRight: "1rem" }}></i>
                <div>
                  <strong>Phone:</strong>
                  <p>+63 9875472431</p>
                </div>
              </li>
              <li style={{ marginBottom: "1rem", display: "flex" }}>
                <i className="bi bi-envelope-fill" style={{ color: "#D4A373", fontSize: "1.5rem", marginRight: "1rem" }}></i>
                <div>
                  <strong>Email:</strong>
                  <p>herstyle@gmail.com</p>
                </div>
              </li>
              <li style={{ display: "flex" }}>
                <i className="bi bi-clock-fill" style={{ color: "#D4A373", fontSize: "1.5rem", marginRight: "1rem" }}></i>
                <div>
                  <strong>Working Hours:</strong>
                  <p>Monday to Friday, 8:00am - 5:00pm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
