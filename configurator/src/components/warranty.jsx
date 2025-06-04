import Header from "./header";
import Footer from "./footer";

const Warranty = () => {
  return (
    <div className="page-container">
      <Header />
      <main className="warranty-page">
        <div className="container">
          <div className="page-header">
            <h1>Warranty Information</h1>
            <p>Comprehensive protection for your investment</p>
          </div>

          <div className="warranty-content">
            <section className="warranty-section">
              <h2>HiConfig System Warranty</h2>
              <div className="warranty-card primary">
                <h3>1-Year Comprehensive Warranty</h3>
                <p>
                  All pre-built gaming systems come with our exclusive 1-year
                  comprehensive warranty covering:
                </p>
                <ul>
                  <li>All hardware components</li>
                  <li>Labor and diagnostics</li>
                  <li>Software installation support</li>
                  <li>Performance optimization</li>
                  <li>Free return shipping for repairs</li>
                </ul>
                <div className="warranty-highlight">
                  <strong>What's Covered:</strong> Hardware failures,
                  manufacturing defects, performance issues
                </div>
              </div>
            </section>

            <section className="warranty-section">
              <h2>Component Warranties</h2>
              <div className="component-warranties">
                <div className="warranty-item">
                  <h4>Processors (CPU)</h4>
                  <p>3-year manufacturer warranty</p>
                </div>
                <div className="warranty-item">
                  <h4>Graphics Cards (GPU)</h4>
                  <p>2-3 year manufacturer warranty</p>
                </div>
                <div className="warranty-item">
                  <h4>Memory (RAM)</h4>
                  <p>Lifetime warranty from manufacturer</p>
                </div>
                <div className="warranty-item">
                  <h4>Storage (SSD/HDD)</h4>
                  <p>3-5 year manufacturer warranty</p>
                </div>
                <div className="warranty-item">
                  <h4>Motherboards</h4>
                  <p>3-year manufacturer warranty</p>
                </div>
                <div className="warranty-item">
                  <h4>Power Supplies</h4>
                  <p>5-10 year manufacturer warranty</p>
                </div>
              </div>
            </section>

            <section className="warranty-section">
              <h2>Extended Warranty Options</h2>
              <div className="extended-warranty-grid">
                <div className="warranty-plan">
                  <h3>Extended Care (2 Years)</h3>
                  <div className="plan-price">$99</div>
                  <ul>
                    <li>Extends coverage to 2 years total</li>
                    <li>Includes accidental damage protection</li>
                    <li>Priority support queue</li>
                    <li>Annual performance tune-up</li>
                  </ul>
                </div>
                <div className="warranty-plan featured">
                  <h3>Premium Care (3 Years)</h3>
                  <div className="plan-price">$179</div>
                  <div className="plan-badge">Most Popular</div>
                  <ul>
                    <li>Extends coverage to 3 years total</li>
                    <li>Accidental damage protection</li>
                    <li>On-site service available</li>
                    <li>Bi-annual performance tune-ups</li>
                    <li>Free component upgrades (up to $200 value)</li>
                  </ul>
                </div>
                <div className="warranty-plan">
                  <h3>Ultimate Care (5 Years)</h3>
                  <div className="plan-price">$299</div>
                  <ul>
                    <li>Extends coverage to 5 years total</li>
                    <li>Complete protection package</li>
                    <li>Guaranteed on-site service</li>
                    <li>Quarterly performance optimization</li>
                    <li>Free component upgrades (up to $500 value)</li>
                    <li>24/7 priority support hotline</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="warranty-section">
              <h2>Warranty Claims Process</h2>
              <div className="claims-process">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Contact Support</h4>
                    <p>
                      Reach out to our support team via phone, email, or live
                      chat with your order number and issue description.
                    </p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Diagnosis</h4>
                    <p>
                      Our technicians will help diagnose the issue remotely or
                      arrange for system evaluation.
                    </p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Resolution</h4>
                    <p>
                      We'll repair, replace, or provide a solution based on the
                      warranty terms and issue severity.
                    </p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4>Return</h4>
                    <p>
                      Your system is returned fully tested and optimized, often
                      with improvements.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="warranty-section">
              <h2>What's Not Covered</h2>
              <div className="exclusions">
                <ul>
                  <li>
                    Physical damage due to misuse or accidents (unless covered
                    by extended warranty)
                  </li>
                  <li>Damage from liquid spills or environmental factors</li>
                  <li>Software issues caused by user modifications</li>
                  <li>Cosmetic damage that doesn't affect functionality</li>
                  <li>Normal wear and tear of consumable parts</li>
                  <li>Damage from power surges (use a surge protector!)</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Warranty;
