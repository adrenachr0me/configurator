import Header from "./header"
import Footer from "./footer"

const Delivery = () => {
  return (
    <div className="page-container">
      <Header />
      <main className="delivery-page">
        <div className="container">
          <div className="page-header">
            <h1>Delivery Information</h1>
            <p>Fast and secure delivery worldwide</p>
          </div>

          <div className="delivery-content">
            <section className="delivery-section">
              <h2>Shipping Options</h2>
              <div className="shipping-grid">
                <div className="shipping-option">
                  <h3>Standard Shipping</h3>
                  <div className="shipping-details">
                    <p>
                      <strong>Delivery Time:</strong> 5-7 business days
                    </p>
                    <p>
                      <strong>Cost:</strong> $15.99
                    </p>
                    <p>
                      <strong>Tracking:</strong> Full tracking included
                    </p>
                  </div>
                </div>
                <div className="shipping-option">
                  <h3>Express Shipping</h3>
                  <div className="shipping-details">
                    <p>
                      <strong>Delivery Time:</strong> 2-3 business days
                    </p>
                    <p>
                      <strong>Cost:</strong> $29.99
                    </p>
                    <p>
                      <strong>Tracking:</strong> Priority tracking
                    </p>
                  </div>
                </div>
                <div className="shipping-option">
                  <h3>Overnight Shipping</h3>
                  <div className="shipping-details">
                    <p>
                      <strong>Delivery Time:</strong> Next business day
                    </p>
                    <p>
                      <strong>Cost:</strong> $49.99
                    </p>
                    <p>
                      <strong>Tracking:</strong> Real-time tracking
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="delivery-section">
              <h2>Free Shipping</h2>
              <div className="free-shipping-info">
                <p>
                  Enjoy free standard shipping on orders over <strong>$500</strong>!
                </p>
                <ul>
                  <li>Applies to standard shipping only</li>
                  <li>Valid for domestic orders</li>
                  <li>Automatic discount applied at checkout</li>
                </ul>
              </div>
            </section>

            <section className="delivery-section">
              <h2>International Shipping</h2>
              <div className="international-info">
                <p>
                  We ship to over 50 countries worldwide. International shipping rates and delivery times vary by
                  destination.
                </p>
                <div className="international-grid">
                  <div className="region">
                    <h4>North America</h4>
                    <p>5-10 business days</p>
                    <p>Starting at $25</p>
                  </div>
                  <div className="region">
                    <h4>Europe</h4>
                    <p>7-14 business days</p>
                    <p>Starting at $35</p>
                  </div>
                  <div className="region">
                    <h4>Asia Pacific</h4>
                    <p>10-21 business days</p>
                    <p>Starting at $45</p>
                  </div>
                </div>
                <p>
                  <em>Note: International orders may be subject to customs duties and taxes.</em>
                </p>
              </div>
            </section>

            <section className="delivery-section">
              <h2>Order Processing</h2>
              <div className="processing-timeline">
                <div className="timeline-item">
                  <div className="timeline-icon">1</div>
                  <div className="timeline-content">
                    <h4>Order Confirmation</h4>
                    <p>You'll receive an email confirmation within minutes of placing your order.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-icon">2</div>
                  <div className="timeline-content">
                    <h4>Processing</h4>
                    <p>
                      Pre-built systems: 1-2 business days
                      <br />
                      Custom builds: 3-5 business days
                    </p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-icon">3</div>
                  <div className="timeline-content">
                    <h4>Quality Check</h4>
                    <p>Every system undergoes thorough testing before shipping.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-icon">4</div>
                  <div className="timeline-content">
                    <h4>Shipping</h4>
                    <p>Your order ships with full tracking information provided.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="delivery-section">
              <h2>Packaging & Protection</h2>
              <div className="packaging-info">
                <p>We take extra care to ensure your gaming PC arrives in perfect condition:</p>
                <ul>
                  <li>Anti-static packaging for all components</li>
                  <li>Custom foam inserts for pre-built systems</li>
                  <li>Shock-resistant outer packaging</li>
                  <li>Insurance coverage on all shipments</li>
                  <li>Signature required for high-value orders</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Delivery
