import React from "react";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container text-center mt-5">
      {/* Hero Section */}
      <div className="bg-light p-5 rounded">
        <h1 className="display-4 fw-bold">Welcome to BlogBook</h1>
        <p className="lead">
          Your ultimate platform for sharing and discovering amazing content.
        </p>
        <div className="mt-4">
          <Link to="/login" className="btn btn-primary btn-lg mx-2">
            Sign In
          </Link>
          <Link to="/register" className="btn btn-outline-primary btn-lg mx-2">
            Sign Up
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="row text-start mt-5">
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Share Your Stories</h5>
              <p className="card-text">
                Create and share your thoughts, ideas, and stories with a global audience.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Discover Amazing Content</h5>
              <p className="card-text">
                Explore articles and posts from writers around the world.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Connect with Others</h5>
              <p className="card-text">
                Engage with like-minded individuals and grow your community.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-primary text-white p-4 rounded mt-5">
        <h2>Join BlogBook Today!</h2>
        <p>
          Don't miss out on the opportunity to connect, share, and discover.
        </p>
        <Link to="/register" className="btn btn-light btn-lg">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Home;
