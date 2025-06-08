import React, { useState } from "react";
import "../index.css";
import axios from "axios";
import { useParams } from "react-router-dom";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function Checkout({ totalPrice }) {
  console.log(totalPrice);
  const [form, setForm] = useState({
    name: "",
    address: "",
    email: "",
    card: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
  };

  if (submitted) {
    return <div>Thank you for your purchase, {form.name}!</div>;
  }

  return (
    <div className="checkout">
      <form className="checkout-form" onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <div>
          <label>Name:</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Payment Option</label>
          <select
            name="card"
            value={form.card}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select a payment option
            </option>
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bank-transfer">Bank Transfer</option>
          </select>
          <div className="payment-info">
            {form.card === "credit-card" && (
              <div>
                <label>Card Number:</label>
                <input
                  name="cardNumber"
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  required
                />
                <input
                  name="expiryDate"
                  type="text"
                  placeholder="MM/YY"
                  required
                />
                <input name="cvv" type="text" placeholder="CVV" required />
                <input
                  name="cardHolderName"
                  type="text"
                  placeholder="Card Holder Name"
                  required
                />
              </div>
            )}
            {form.card === "paypal" && (
              <div>
                <label>PayPal Email:</label>
                <input
                  name="paypalEmail"
                  type="email"
                  placeholder="email@example.com"
                  required
                />
              </div>
            )}
            {form.card === "bank-transfer" && (
              <div>
                <label>Bank Account Number:</label>
                <p>UA753220010000026200335748809</p>
              </div>
            )}
          </div>
        </div>
        <button type="submit">Place Order</button>
        <p className="full-price">Total Price: {totalPrice.totalPrice}$</p>
        <Link to="/cart" id="back-button">
          Back to Cart
        </Link>
      </form>
    </div>
  );
}

export default Checkout;
