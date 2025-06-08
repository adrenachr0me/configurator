import Header from "./header"
import Footer from "./footer"

const PrivacyPolicy = () => {
  return (
    <div className="page-container">
      <Header />
      <main className="privacy-page">
        <div className="container">
          <div className="page-header">
            <h1>Privacy Policy</h1>
            <p>How we collect, use, and protect your personal information</p>
          </div>

          <div className="privacy-content">
            <section className="privacy-section">
              <h2>1. Introduction</h2>
              <p>
                HiConfig ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains
                how we collect, use, disclose, and safeguard your information when you visit our website or make a
                purchase.
              </p>
              <p>
                Please read this Privacy Policy carefully. By accessing or using our website, you acknowledge that you
                have read, understood, and agree to be bound by all the terms outlined in this Privacy Policy.
              </p>
            </section>

            <section className="privacy-section">
              <h2>2. Information We Collect</h2>
              <h3>2.1 Personal Information</h3>
              <p>We may collect personal information that you voluntarily provide to us when you:</p>
              <ul>
                <li>Create an account</li>
                <li>Place an order</li>
                <li>Sign up for our newsletter</li>
                <li>Contact our customer service</li>
                <li>Participate in surveys or promotions</li>
              </ul>
              <p>This information may include:</p>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Mailing address</li>
                <li>Phone number</li>
                <li>Payment information (credit card details, billing address)</li>
                <li>Order history</li>
              </ul>

              <h3>2.2 Automatically Collected Information</h3>
              <p>
                When you visit our website, we may automatically collect certain information about your device,
                including:
              </p>
              <ul>
                <li>IP address</li>
                <li>Browser type</li>
                <li>Operating system</li>
                <li>Device information</li>
                <li>Pages visited</li>
                <li>Time and date of your visit</li>
                <li>Referring website</li>
                <li>Click-stream data</li>
              </ul>
              <p>
                This information is collected using cookies, web beacons, and similar technologies. For more information
                about our use of cookies, please see our Cookie Policy.
              </p>
            </section>

            <section className="privacy-section">
              <h2>3. How We Use Your Information</h2>
              <p>We may use the information we collect for various purposes, including to:</p>
              <ul>
                <li>Process and fulfill your orders</li>
                <li>Create and manage your account</li>
                <li>Provide customer support</li>
                <li>Send transactional emails (order confirmations, shipping updates)</li>
                <li>Send marketing communications (if you have opted in)</li>
                <li>Improve our website and services</li>
                <li>Personalize your shopping experience</li>
                <li>Analyze usage patterns and trends</li>
                <li>Protect against fraud and unauthorized transactions</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="privacy-section">
              <h2>4. Sharing Your Information</h2>
              <p>We may share your information with:</p>
              <h3>4.1 Service Providers</h3>
              <p>
                We may share your information with third-party service providers who perform services on our behalf,
                such as payment processing, order fulfillment, shipping, customer service, and marketing assistance.
              </p>

              <h3>4.2 Business Partners</h3>
              <p>
                We may share your information with our business partners to offer you certain products, services, or
                promotions that may be of interest to you.
              </p>

              <h3>4.3 Legal Requirements</h3>
              <p>
                We may disclose your information if required to do so by law or in response to valid requests by public
                authorities (e.g., a court or government agency).
              </p>

              <h3>4.4 Business Transfers</h3>
              <p>
                We may share or transfer your information in connection with, or during negotiations of, any merger,
                sale of company assets, financing, or acquisition of all or a portion of our business to another
                company.
              </p>
            </section>

            <section className="privacy-section">
              <h2>5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect the security of your personal
                information. However, please be aware that no method of transmission over the Internet or electronic
                storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="privacy-section">
              <h2>6. Data Retention</h2>
              <p>
                We will retain your personal information only for as long as necessary to fulfill the purposes outlined
                in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
            </section>

            <section className="privacy-section">
              <h2>7. Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul>
                <li>The right to access the personal information we hold about you</li>
                <li>The right to request correction of inaccurate personal information</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to restrict or object to processing of your personal information</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent at any time</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided in the "Contact Us" section
                below.
              </p>
            </section>

            <section className="privacy-section">
              <h2>8. Children's Privacy</h2>
              <p>
                Our website is not intended for children under the age of 13. We do not knowingly collect personal
                information from children under 13. If you are a parent or guardian and believe that your child has
                provided us with personal information, please contact us immediately.
              </p>
            </section>

            <section className="privacy-section">
              <h2>9. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We have no control over and assume no
                responsibility for the content, privacy policies, or practices of any third-party sites or services.
              </p>
            </section>

            <section className="privacy-section">
              <h2>10. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy
                Policy periodically for any changes.
              </p>
            </section>

            <section className="privacy-section">
              <h2>11. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us
                at:
              </p>
              <div className="contact-info">
                <p>Email: privacy@hiconfig.com</p>
                <p>Phone: +1 (111) 111-1111</p>
                <p>Address: 123 Example Street, New York, NY 10001</p>
              </div>
            </section>

            <div className="privacy-footer">
              <p>Last Updated: June 1, 2025</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default PrivacyPolicy
