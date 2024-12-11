import limioImage from '../assets/limio.jpg';
import naguitImage from '../assets/naguit.jpg';
import ticsayImage from '../assets/ticsay.jpg';
const About = () => {
    return (
      <div className="container mt-5">
        {/* Hero Section */}
        <div className="bg-light p-5 rounded shadow-sm text-center">
          <h1 className="fw-bold">About Us</h1>
          <p className="lead">
            Your go-to platform for sharing and discovering amazing content, 
            crafted with passion by a team of dedicated developers.
          </p>
        </div>
  
        {/* Mission & Vision Section */}
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="bg-primary text-white p-4 rounded shadow-sm">
              <h3>Our Mission</h3>
              <p>
                To empower individuals to express their ideas, connect with 
                others, and inspire the world through content creation.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="bg-secondary text-white p-4 rounded shadow-sm">
              <h3>Our Vision</h3>
              <p>
                To become the leading platform for content sharing, fostering 
                creativity, collaboration, and growth in a global community.
              </p>
            </div>
          </div>
        </div>
  
        {/* Core Values Section */}
        <div className="mt-5">
          <h2 className="text-center">Our Core Values</h2>
          <div className="row text-center mt-4">
            <div className="col-md-4">
              <div className="p-3">
                <h4>Creativity</h4>
                <p>
                  Encouraging innovative and unique ideas in content creation.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3">
                <h4>Community</h4>
                <p>
                  Building strong connections and fostering collaboration.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3">
                <h4>Excellence</h4>
                <p>
                  Striving for the highest quality in everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Meet the Team Section */}
        <div className="mt-5">
          <h2 className="text-center mb-4">Meet the Team</h2>
          <div className="row text-center">
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img
                  src={limioImage}
                  className="card-img-top"
                  alt="Team Member"
                />
                <div className="card-body">
                  <h5 className="card-title">Alex Gaebriel Limio</h5>
                  <p className="card-text">Developer</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img
                  src={naguitImage}
                  className="card-img-top"
                  alt="Team Member"
                />
                <div className="card-body">
                  <h5 className="card-title">Kate Louise Naguit</h5>
                  <p className="card-text">Developer</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img
                  src={ticsayImage}
                  className="card-img-top"
                  alt="Team Member"
                />
                <div className="card-body">
                  <h5 className="card-title">Samantha Jane Ticsay</h5>
                  <p className="card-text">Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  