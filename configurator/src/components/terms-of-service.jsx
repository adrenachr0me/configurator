import Header from "./header"
import Footer from "./footer"

const TermsOfService = () => {
  return (
    <div className="page-container">
      <Header />
      <main className="terms-page">
        <div className="container">
          <div className="page-header">
            <h1>Terms of Service</h1>
            <p>Please read these terms carefully before using our services</p>
          </div>

          <div className="terms-content">
            <section className="terms-section">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using the HiConfig website, services, or products, you agree to be bound by these Terms
                of Service. If you do not agree to all the terms and conditions, you may not access or use our services.
              </p>
            </section>

            <section className="terms-section">
              <h2>2. Changes to Terms</h2>
              <p>
                HiConfig reserves the right to modify or replace these Terms at any time. We will provide notice of any
                changes by updating the "Last Updated" date. Your continued use of the service after any such changes
                constitutes your acceptance of the new Terms.
              </p>
            </section>

            <section className="terms-section">
              <h2>3. User Accounts</h2>
              <p>
                When you create an account with us, you must provide accurate, complete, and current information. You
                are responsible for safeguarding the password and for all activities that occur under your account.
              </p>
              <p>
                You agree to notify HiConfig immediately of any unauthorized use of your account or any other breach of
                security. HiConfig will not be liable for any loss or damage arising from your failure to comply with
                this section.
              </p>
            </section>

            <section className="terms-section">
              <h2>4. Products and Services</h2>
              <h3>4.1 Product Information</h3>
              <p>
                We strive to provide accurate product descriptions, specifications, and images. However, we do not
                warrant that product descriptions or other content is accurate, complete, reliable, current, or
                error-free.
              </p>

              <h3>4.2 Pricing and Availability</h3>
              <p>
                All prices are subject to change without notice. We reserve the right to modify or discontinue any
                product or service without notice. We shall not be liable to you or any third party for any
                modification, price change, suspension, or discontinuance of the service.
              </p>

              <h3>4.3 Custom Builds</h3>
              <p>
                For custom PC builds, we will make every effort to meet your specifications. However, we reserve the
                right to substitute components of equal or greater value if necessary due to availability issues, with
                notification to the customer.
              </p>
            </section>

            <section className="terms-section">
              <h2>5. Orders and Payment</h2>
              <h3>5.1 Order Acceptance</h3>
              <p>
                Your order constitutes an offer to purchase our products. All orders are subject to acceptance by
                HiConfig. We reserve the right to refuse or cancel any order for any reason, including but not limited
                to product availability, errors in pricing or product information, or suspected fraud.
              </p>

              <h3>5.2 Payment Terms</h3>
              <p>
                We accept various payment methods as indicated on our website. By providing payment information, you
                represent and warrant that you have the legal right to use the payment method you provide.
              </p>

              <h3>5.3 Taxes</h3>
              <p>
                You are responsible for paying all taxes associated with your purchases. Prices displayed do not include
                taxes unless explicitly stated.
              </p>
            </section>

            <section className="terms-section">
              <h2>6. Shipping and Delivery</h2>
              <p>
                Shipping and delivery times are estimates only and cannot be guaranteed. HiConfig is not liable for any
                delays in receiving your order. Risk of loss and title for items purchased pass to you upon delivery of
                the items to the carrier.
              </p>
            </section>

            <section className="terms-section">
              <h2>7. Returns and Refunds</h2>
              <p>
                Please refer to our separate Return Policy for information about returns, refunds, and exchanges. By
                using our services, you agree to be bound by the terms of our Return Policy.
              </p>
            </section>

            <section className="terms-section">
              <h2>8. Warranty</h2>
              <p>
                HiConfig provides warranties as specified in our Warranty Policy. Except as expressly provided in the
                Warranty Policy, HiConfig provides products "as is" without any warranty of any kind.
              </p>
            </section>

            <section className="terms-section">
              <h2>9. Limitation of Liability</h2>
              <p>
                In no event shall HiConfig, its officers, directors, employees, or agents, be liable to you for any
                direct, indirect, incidental, special, punitive, or consequential damages whatsoever resulting from any:
              </p>
              <ul>
                <li>Errors, mistakes, or inaccuracies of content</li>
                <li>Personal injury or property damage related to your use of our products</li>
                <li>
                  Any unauthorized access to or use of our secure servers and/or any personal information stored therein
                </li>
                <li>Any interruption or cessation of transmission to or from our services</li>
                <li>
                  Any bugs, viruses, trojan horses, or the like, which may be transmitted through our service by any
                  third party
                </li>
                <li>
                  Any errors or omissions in any content or for any loss or damage of any kind incurred as a result of
                  your use of any content
                </li>
              </ul>
              <p>
                This limitation of liability applies whether the alleged liability is based on contract, tort,
                negligence, strict liability, or any other basis, even if HiConfig has been advised of the possibility
                of such damage.
              </p>
            </section>

            <section className="terms-section">
              <h2>10. Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless HiConfig and its subsidiaries, agents, licensors,
                managers, and other affiliated companies, and their employees, contractors, agents, officers, and
                directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or
                debt, and expenses arising from your use of our services.
              </p>
            </section>

            <section className="terms-section">
              <h2>11. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of the United States, without
                regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms
                will not be considered a waiver of those rights.
              </p>
            </section>

            <section className="terms-section">
              <h2>12. Severability</h2>
              <p>
                If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining
                provisions of these Terms will remain in effect.
              </p>
            </section>

            <section className="terms-section">
              <h2>13. Entire Agreement</h2>
              <p>
                These Terms constitute the entire agreement between you and HiConfig regarding our services, and
                supersede and replace any prior agreements we might have between us.
              </p>
            </section>

            <section className="terms-section">
              <h2>14. Contact Information</h2>
              <p>If you have any questions about these Terms, please contact us at:</p>
              <div className="contact-info">
                <p>Email: legal@hiconfig.com</p>
                <p>Phone: +1 (111) 111-1111</p>
                <p>Address: 123 Example Street, New York, NY 10001</p>
              </div>
            </section>

            <div className="terms-footer">
              <p>Last Updated: June 1, 2025</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default TermsOfService
