import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn") === "true";
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (loggedIn && currentUser) {
      setUser(currentUser);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  if (!user) {
    return null;
  }

  return (
    <div className="container mt-5" style={{ padding: "2rem", backgroundColor: "#FAEDCD", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
      {}
      <div className="card shadow-sm p-4" style={{ padding: "1.5rem", backgroundColor: "#E9EDC9", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)" }}>
        <div className="text-center">
          <img
            src={user.profilePhoto || "https://via.placeholder.com/150"}
            alt="Profile Avatar"
            className="rounded-circle mb-3"
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
          <h3 className="fw-bold">{user.firstName} {user.lastName}</h3>
          <p className="text-muted">{user.email}</p>
        </div>
        <hr />
        <div>
          <h4 className="mb-3">About Me</h4>
          <p>
            {user.bio || "No bio available. Update your profile to add more information about yourself."}
          </p>
        </div>
        <div className="text-end">
          <button
            className="btn btn-primary"
            onClick={() => alert("Edit Profile Feature Coming Soon!")}
            style={{ backgroundColor: "#D4A373", color: "white", border: "none", padding: "0.5rem 1rem", borderRadius: "4px", cursor: "pointer" }}
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
