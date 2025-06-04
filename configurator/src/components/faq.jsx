"use client"

import { useState } from "react"
import Header from "./header"
import Footer from "./footer"

const FAQ = () => {
  const [openItems, setOpenItems] = useState({})

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  const faqData = [
    {
      question: "How does the PC configurator work?",
      answer:
        "Our configurator guides you through selecting compatible components for your gaming PC. Simply choose your budget range, intended use, and preferences, and we'll recommend the best components that work together perfectly.",
    },
    {
      question: "Do you offer pre-built gaming PCs?",
      answer:
        "Yes! We offer a range of pre-built gaming PCs optimized for different performance levels and budgets. Each system is thoroughly tested and comes with our quality guarantee.",
    },
    {
      question: "What warranty do you provide?",
      answer:
        "All our products come with manufacturer warranties. Pre-built systems include our additional 1-year comprehensive warranty covering parts and labor. Individual components carry their respective manufacturer warranties.",
    },
    {
      question: "Can I upgrade my PC later?",
      answer:
        "Our systems are designed with upgradeability in mind. We can help you plan future upgrades and ensure compatibility with your current setup.",
    },
    {
      question: "Do you provide technical support?",
      answer:
        "Yes, we offer comprehensive technical support including installation guidance, troubleshooting, and optimization tips. Our support team is available via phone, email, and live chat.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Pre-built systems typically ship within 3-5 business days. Custom configurations may take 7-10 business days for assembly and testing. We offer expedited shipping options for faster delivery.",
    },
    {
      question: "Can I return or exchange my purchase?",
      answer:
        "We offer a 30-day return policy for unopened items in original packaging. Custom-built systems can be returned within 14 days. Please see our full return policy for details.",
    },
    {
      question: "Do you offer financing options?",
      answer:
        "Yes, we partner with several financing companies to offer flexible payment plans. You can apply for financing during checkout with instant approval decisions.",
    },
  ]

  return (
    <div className="page-container">
      <Header />
      <main className="faq-page">
        <div className="container">
          <div className="page-header">
            <h1>Frequently Asked Questions</h1>
            <p>Find answers to common questions about our products and services</p>
          </div>

          <div className="faq-content">
            <div className="faq-list">
              {faqData.map((item, index) => (
                <div key={index} className="faq-item">
                  <button className="faq-question" onClick={() => toggleItem(index)}>
                    <span>{item.question}</span>
                    <span className={`faq-icon ${openItems[index] ? "open" : ""}`}>▼</span>
                  </button>
                  {openItems[index] && (
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="faq-contact">
              <h3>Still have questions?</h3>
              <p>Can't find what you're looking for? Our support team is here to help!</p>
              <div className="contact-options">
                <a href="/contact" className="contact-button">
                  Contact Support
                </a>
                <a href="mailto:info@hiconfig.com" className="contact-button secondary">
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default FAQ
