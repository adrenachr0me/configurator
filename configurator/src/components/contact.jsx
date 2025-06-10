"use client";

import { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import axios from "axios";
import { API_BASE_URL } from "../config/api";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const api = axios.create({
    baseURL: API_BASE_URL,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/messages", formData);
    } catch (error) {
      console.error(error);
    }
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="page-container">
      <Header />
      <main className="contact-page">
        <div className="container">
          <div className="page-header">
            <h1>Contact Us</h1>
            <p>Get in touch with our team - we're here to help!</p>
          </div>

          <div className="contact-content">
            <div className="contact-grid">
              <div className="contact-info">
                <h2>Get In Touch</h2>
                <p>
                  Have questions about our products or need technical support?
                  Our team is ready to assist you.
                </p>

                <div className="contact-methods">
                  <div className="contact-method">
                    <div className="contact-icon">📞</div>
                    <div className="contact-details">
                      <h3>Phone Support</h3>
                      <p>+1 (111) 111-1111</p>
                      <p>
                        Mon-Fri: 9AM-6PM EST
                        <br />
                        Sat: 10AM-4PM EST
                      </p>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="contact-icon">✉️</div>
                    <div className="contact-details">
                      <h3>Email Support</h3>
                      <p>info@hiconfig.com</p>
                      <p>Response within 24 hours</p>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="contact-icon">💬</div>
                    <div className="contact-details">
                      <h3>Live Chat</h3>
                      <p>Available on our website</p>
                      <p>Mon-Fri: 9AM-6PM EST</p>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="contact-icon">📍</div>
                    <div className="contact-details">
                      <h3>Visit Us</h3>
                      <p>
                        123 Example Street
                        <br />
                        New York, NY 10001
                      </p>
                      <p>By appointment only</p>
                    </div>
                  </div>
                </div>

                <div className="business-hours">
                  <h3>Business Hours</h3>
                  <div className="hours-grid">
                    <div className="hours-item">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="hours-item">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="hours-item">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-form-section">
                <h2>Send Us a Message</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="technical">Technical Support</option>
                      <option value="sales">Sales Question</option>
                      <option value="warranty">Warranty Claim</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Please describe your inquiry in detail..."
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-button">
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <div className="support-sections">
              <h2>Quick Support Links</h2>
              <div className="support-grid">
                <a href="/faq" className="support-card">
                  <div className="support-icon">❓</div>
                  <h3>FAQ</h3>
                  <p>Find answers to common questions</p>
                </a>
                <a href="/warranty" className="support-card">
                  <div className="support-icon">🛡️</div>
                  <h3>Warranty</h3>
                  <p>Learn about our warranty coverage</p>
                </a>
                <a href="/delivery" className="support-card">
                  <div className="support-icon">🚚</div>
                  <h3>Delivery</h3>
                  <p>Shipping and delivery information</p>
                </a>
                <a href="/configurator" className="support-card">
                  <div className="support-icon">⚙️</div>
                  <h3>Configurator</h3>
                  <p>Build your custom gaming PC</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
