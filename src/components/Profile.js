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
      navigate("/login"); // Redirect to login if not logged in
    }
  }, [navigate]);

  if (!user) {
    return null; // Prevent rendering until user data is loaded
  }

  return (
    <div className="container mt-5">
      {/* Profile Card */}
      <div className="card shadow-sm p-4">
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
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
