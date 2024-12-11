import limioImage from "../assets/limio.jpg";
import naguitImage from "../assets/naguit.jpg";
import ticsayImage from "../assets/ticsay.jpg";

const About = () => {
  return (
    <div style={{ margin: "2rem auto", padding: "1rem", maxWidth: "1200px" }}>
      {}
      <section
        style={{
          backgroundColor: "#FAEDCD",
          padding: "2rem",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontFamily: "Arial", color: "#D4A373", fontSize: "2.5rem", fontWeight: "bold" }}>About HerStyle</h1>
        <p style={{ fontFamily: "Arial", color: "#000", fontSize: "1rem", marginTop: "1rem" }}>
          HerStyle is a daily women’s lifestyle site that covers style, culture, food,
          travel, relationships, and parenting. Known industry-wide for its large and deeply
          engaged readership, HerStyle encourages visitors to “come for the blog, stay for the
          comments.” The site receives over 4 million monthly page views and almost 1 million
          monthly unique visitors. HerStyle regularly donates a percentage of profits to
          organizations we support, including RAICES, NAACP, NARAL, Greenpeace, Save the
          Children, Planned Parenthood, the Lilith Fund, and The Florence Project. We’re glad
          you are here. Thank you so much for reading.
        </p>
      </section>

      {}
      <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" }}>
        <div
          style={{
            flex: "1",
            padding: "1.5rem",
            backgroundColor: "#CCD5AE",
            borderRadius: "10px",
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3 style={{ fontFamily: "Arial", fontSize: "1.5rem", color: "#000", fontWeight: "bold" }}>Our Mission</h3>
          <p style={{ fontFamily: "Arial", fontSize: "1rem", color: "#000", marginTop: "1rem" }}>
            At HerStyle, our mission is to create a welcoming space for women to connect, share,
            and find inspiration. We aim to cover life’s joys and challenges with authenticity,
            compassion, and humor.
          </p>
        </div>

        <div
          style={{
            flex: "1",
            padding: "1.5rem",
            backgroundColor: "#E9EDC9",
            borderRadius: "10px",
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3 style={{ fontFamily: "Arial", fontSize: "1.5rem", color: "#000", fontWeight: "bold" }}>Our Community</h3>
          <p style={{ fontFamily: "Arial", fontSize: "1rem", color: "#000", marginTop: "1rem" }}>
            What sets HerStyle apart is the incredible community of readers who engage with our
            content. From insightful comments to shared experiences, our readers bring warmth to
            every conversation.
          </p>
        </div>
      </div>

      {}
      <div style={{ marginTop: "2rem" }}>
        <h2
          style={{
            fontFamily: "Arial",
            textAlign: "center",
            color: "#D4A373",
            fontSize: "2rem",
            marginBottom: "1rem",
          }}
        >
          Our Impact
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              backgroundColor: "#FAEDCD",
              padding: "1rem",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              flex: "1",
              maxWidth: "320px",
              margin: "0 auto",
            }}
          >
            <h4
              style={{ fontFamily: "Arial", fontSize: "1.25rem", fontWeight: "bold", marginBottom: "0.5rem" }}
            >
              Supporting Important Causes
            </h4>
            <p style={{ fontFamily: "Arial", fontSize: "0.9rem", color: "#000", margin: "0" }}>
              We donate a percentage of our profits to organizations like RAICES, NAACP,
              Greenpeace, Planned Parenthood, and more, helping to champion critical initiatives
              worldwide.
            </p>
          </div>
          <div
            style={{
              backgroundColor: "#FAEDCD",
              padding: "1rem",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              flex: "1",
              maxWidth: "320px",
              margin: "0 auto",
            }}
          >
            <h4
              style={{ fontFamily: "Arial", fontSize: "1.25rem", fontWeight: "bold", marginBottom: "0.5rem" }}
            >
              Promoting Sustainable Practices
            </h4>
            <p style={{ fontFamily: "Arial", fontSize: "0.9rem", color: "#000", margin: "0" }}>
              Through thoughtful content and partnerships, we highlight eco-conscious brands and
              sustainable living tips to encourage positive environmental change.
            </p>
          </div>
          <div
            style={{
              backgroundColor: "#FAEDCD",
              padding: "1rem",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              flex: "1",
              maxWidth: "320px",
              margin: "0 auto",
            }}
          >
            <h4
              style={{ fontFamily: "Arial", fontSize: "1.25rem", fontWeight: "bold", marginBottom: "0.5rem" }}
            >
              Empowering the Community
            </h4>
            <p style={{ fontFamily: "Arial", fontSize: "0.9rem", color: "#000", margin: "0" }}>
              From sharing inspiring stories to amplifying diverse voices, we strive to empower
              and uplift our readers and the wider community every day.
            </p>
          </div>
        </div>
      </div>

      {}
      <div style={{ marginTop: "2rem" }}>
        <h2
          style={{ fontFamily: "Arial", textAlign: "center", color: "#D4A373", fontSize: "2rem", marginBottom: "1rem" }}
        >
          Meet the Team
        </h2>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              flex: "1",
              maxWidth: "300px",
              textAlign: "center",
              margin: "0 auto",
            }}
          >
            <img
              src={limioImage}
              alt="Alex Gaebriel Limio"
              style={{ width: "100%", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
            />
            <h4 style={{ fontFamily: "Arial", color: "#000", fontSize: "1.25rem", marginTop: "0.5rem" }}>Alex Gaebriel Limio</h4>
            <p style={{ fontFamily: "Arial", color: "#000", fontSize: "1rem" }}>Developer</p>
          </div>

          <div
            style={{
              flex: "1",
              maxWidth: "300px",
              textAlign: "center",
              margin: "0 auto",
            }}
          >
            <img
              src={naguitImage}
              alt="Kate Louise Naguit"
              style={{ width: "100%", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
            />
            <h4 style={{ fontFamily: "Arial", color: "#000", fontSize: "1.25rem", marginTop: "0.5rem" }}>Kate Louise Naguit</h4>
            <p style={{ fontFamily: "Arial", color: "#000", fontSize: "1rem" }}>Developer</p>
          </div>

          <div
            style={{
              flex: "1",
              maxWidth: "300px",
              textAlign: "center",
              margin: "0 auto",
            }}
          >
            <img
              src={ticsayImage}
              alt="Samantha Jane Ticsay"
              style={{ width: "100%", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
            />
            <h4 style={{ fontFamily: "Arial", color: "#000", fontSize: "1.25rem", marginTop: "0.5rem" }}>Samantha Jane Ticsay</h4>
            <p style={{ fontFamily: "Arial", color: "#000", fontSize: "1rem" }}>Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
