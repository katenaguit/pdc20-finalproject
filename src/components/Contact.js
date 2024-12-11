import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" }); // For success or error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    // EmailJS service call
    emailjs
      .send(
        "service_vvmfovu", 
        "template_j6abqnt", 
        { name, email, subject, message },
        "Mqz3JnJd33k_pgyPY" 
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus({ type: "success", message: "Message sent successfully!" });
          setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
        },
        (err) => {
          console.error("FAILED...", err);
          setStatus({
            type: "error",
            message: "Failed to send message. Please try again.",
          });
        }
      );
  };

  return (
    <div className="container mt-5">
      {/* Hero Section */}
      <div className="bg-primary text-white text-center p-5 rounded shadow-sm">
        <h1 className="fw-bold">Contact Us</h1>
        <p className="lead">
          Have questions or need assistance? We're here to help.
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="row mt-5">
        <div className="col-md-6">
          <h3 className="mb-4">Get in Touch</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Subject</label>
              <input
                type="text"
                className="form-control"
                name="subject"
                placeholder="Enter the subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                rows="5"
                name="message"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Send Message
            </button>
          </form>
          {/* Status Message */}
          {status.message && (
            <div
              className={`alert mt-3 ${
                status.type === "success" ? "alert-success" : "alert-danger"
              }`}
              role="alert"
            >
              {status.message}
            </div>
          )}
        </div>

        {/* Contact Information Section */}
        <div className="col-md-6">
          <h3 className="mb-4">Contact Information</h3>
          <ul className="list-unstyled">
            <li className="mb-3">
              <i className="bi bi-geo-alt-fill text-primary me-2"></i>
              <strong>Address:</strong> 123 BlogSite Street, Web City
            </li>
            <li className="mb-3">
              <i className="bi bi-telephone-fill text-primary me-2"></i>
              <strong>Phone:</strong> +1 (123) 456-7890
            </li>
            <li className="mb-3">
              <i className="bi bi-envelope-fill text-primary me-2"></i>
              <strong>Email:</strong> blogsite911@gmail.com
            </li>
            <li>
              <i className="bi bi-clock-fill text-primary me-2"></i>
              <strong>Working Hours:</strong> Mon-Fri, 9am - 5pm
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
