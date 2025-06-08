import Header from "./header";
import Footer from "./footer";
import Logo from "./logo";

const AboutUs = () => {
  return (
    <div className="page-container">
      <Header />
      <main className="about-us-page">
        <div className="container">
          <div className="page-header">
            <h1>About HiConfig</h1>
            <p>
              Your reliable partner in the world of gaming computers and
              components
            </p>
          </div>

          <section className="about-content">
            <div className="about-grid">
              <div className="about-text">
                <h2>Our Story</h2>
                <p>
                  Founded in 2020, HiConfig emerged from a passion for gaming
                  and technology. We recognized the need for a platform that
                  could bridge the gap between pre-built gaming systems and
                  custom configurations, making high-performance computing
                  accessible to everyone.
                </p>
                <p>
                  Our team consists of experienced engineers, gamers, and tech
                  enthusiasts who understand what it takes to build the perfect
                  gaming machine. We've carefully curated our component
                  selection and pre-built systems to ensure optimal performance
                  and value.
                </p>
              </div>
            </div>
          </section>

          <section className="mission-section">
            <h2>Our Mission</h2>
            <div className="mission-grid">
              <div className="mission-card">
                <div className="mission-icon">🎯</div>
                <h3>Quality First</h3>
                <p>
                  We source only the highest quality components from trusted
                  manufacturers to ensure reliability and performance.
                </p>
              </div>
              <div className="mission-card">
                <div className="mission-icon">🚀</div>
                <h3>Innovation</h3>
                <p>
                  Our configurator tool makes it easy for anyone to build their
                  dream gaming PC with expert guidance.
                </p>
              </div>
              <div className="mission-card">
                <div className="mission-icon">🤝</div>
                <h3>Customer Support</h3>
                <p>
                  We provide comprehensive support from selection to delivery
                  and beyond, ensuring your satisfaction.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
