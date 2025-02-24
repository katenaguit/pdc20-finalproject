import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [activeTab, setActiveTab] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: { firstName: "", lastName: "", dob: "" },
    contactInfo: { email: "", phone: "" },
    accountInfo: { username: "", password: "", profilePhoto: null },
    additionalDetails: { bio: "" },
  });
  const [showSuccess, setShowSuccess] = useState(false); 
  const navigate = useNavigate(); 

  const handleInputChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          accountInfo: { ...prev.accountInfo, profilePhoto: reader.result },
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNext = () => setActiveTab((prev) => prev + 1);
  const handlePrevious = () => setActiveTab((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const newUser = {
      ...formData.personalInfo,
      ...formData.contactInfo,
      ...formData.accountInfo,
      bio: formData.additionalDetails.bio,
    };


    localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));


    setShowSuccess(true);

    
    setTimeout(() => {
      setFormData({
        personalInfo: { firstName: "", lastName: "", dob: "" },
        contactInfo: { email: "", phone: "" },
        accountInfo: { username: "", password: "", profilePhoto: null },
        additionalDetails: { bio: "" },
      });
      setActiveTab(1);
      setShowSuccess(false); 
      navigate("/login"); 
    }, 2000); 
  };

  return (
    <div style={{ maxWidth: "800px", margin: "2rem auto", fontFamily: "Arial, sans-serif" }}>
      {}
      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        <h1 style={{ fontWeight: "bold" }}>Create Your Account</h1>
        <p style={{ color: "#666" }}>
          Fill out the form step by step to register your account.
        </p>
      </div>

      {}
      {showSuccess && (
        <div
          style={{
            padding: "1rem",
            borderRadius: "4px",
            backgroundColor: "#d4edda",
            color: "#155724",
            marginBottom: "1rem",
          }}
        >
          Registration successful! Redirecting to the login page...
        </div>
      )}

      {}
      <div className="progress mb-4">
        <div
          className={`progress-bar ${activeTab === 4 ? "bg-success" : "bg-info"}`}
          role="progressbar"
          style={{ width: `${(activeTab / 4) * 100}%`, backgroundColor: "#17a2b8" }}
          aria-valuenow={(activeTab / 4) * 100}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          Step {activeTab} of 4
        </div>
      </div>

      {}
      <div className="card shadow-sm">
        <div className="card-body">
          {activeTab === 1 && (
            <div>
              <h4>Personal Information</h4>
              <form>
                <input
                  type="text"
                  className="form-control my-3"
                  placeholder="First Name"
                  value={formData.personalInfo.firstName}
                  onChange={(e) =>
                    handleInputChange("personalInfo", "firstName", e.target.value)
                  }
                  required
                />
                <input
                  type="text"
                  className="form-control my-3"
                  placeholder="Last Name"
                  value={formData.personalInfo.lastName}
                  onChange={(e) =>
                    handleInputChange("personalInfo", "lastName", e.target.value)
                  }
                  required
                />
                <input
                  type="date"
                  className="form-control my-3"
                  value={formData.personalInfo.dob}
                  onChange={(e) =>
                    handleInputChange("personalInfo", "dob", e.target.value)
                  }
                  required
                />
              </form>
            </div>
          )}

          {activeTab === 2 && (
            <div>
              <h4>Contact Information</h4>
              <form>
                <input
                  type="email"
                  className="form-control my-3"
                  placeholder="Email"
                  value={formData.contactInfo.email}
                  onChange={(e) =>
                    handleInputChange("contactInfo", "email", e.target.value)
                  }
                  required
                />
                <input
                  type="tel"
                  className="form-control my-3"
                  placeholder="Phone Number"
                  value={formData.contactInfo.phone}
                  onChange={(e) =>
                    handleInputChange("contactInfo", "phone", e.target.value)
                  }
                  required
                />
              </form>
            </div>
          )}

          {activeTab === 3 && (
            <div>
              <h4>Account Information</h4>
              <form>
                <input
                  type="text"
                  className="form-control my-3"
                  placeholder="Username"
                  value={formData.accountInfo.username}
                  onChange={(e) =>
                    handleInputChange("accountInfo", "username", e.target.value)
                  }
                  required
                />
                <input
                  type="password"
                  className="form-control my-3"
                  placeholder="Password"
                  value={formData.accountInfo.password}
                  onChange={(e) =>
                    handleInputChange("accountInfo", "password", e.target.value)
                  }
                  required
                />
                <label className="form-label">Profile Photo</label>
                <input
                  type="file"
                  className="form-control my-3"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                />
                {formData.accountInfo.profilePhoto && (
                  <div className="mt-3 text-center">
                    <img
                      src={formData.accountInfo.profilePhoto}
                      alt="Preview"
                      className="img-fluid rounded-circle"
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                )}
              </form>
            </div>
          )}

          {activeTab === 4 && (
            <div>
              <h4>Additional Details</h4>
              <form>
                <textarea
                  className="form-control my-3"
                  placeholder="Tell us about yourself"
                  rows="4"
                  value={formData.additionalDetails.bio}
                  onChange={(e) =>
                    handleInputChange("additionalDetails", "bio", e.target.value)
                  }
                  required
                ></textarea>
              </form>
            </div>
          )}

          {}
          <div className="d-flex justify-content-between mt-4">
            {activeTab > 1 && (
              <button className="btn btn-light" onClick={handlePrevious}>
                Previous
              </button>
            )}
            {activeTab < 4 ? (
              <button className="btn btn-info ms-auto" onClick={handleNext}>
                Next
              </button>
            ) : (
              <button
                className="btn btn-success ms-auto"
                onClick={handleSubmit}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
