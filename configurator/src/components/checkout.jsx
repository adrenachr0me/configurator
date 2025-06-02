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
          <label>Card Number:</label>
          <input
            name="card"
            value={form.card}
            onChange={handleChange}
            required
          />
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
