import React from "react";
import "../index.css";
import Header from "./header";
import Footer from "./footer";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import configurator from "./configurator";
import axios from "axios";
import { useEffect, useState } from "react";
function BuyCart({ config, setConfig }) {
  if (!config) {
    return <div>Loading...</div>;
  }
  const components = [
    { type: "CPU", config: config.cpu },
    { type: "GPU", config: config.gpu },
    { type: "RAM", config: config.ram },
    { type: "Storage", config: config.storage },
    { type: "Cooler", config: config.cooler },
    { type: "Power Supply", config: config.power },
    { type: "Motherboard", config: config.motherboard },
    { type: "Case", config: config.cases },
  ];
  const totalPrice = components.reduce((i, component) => {
    if (component.config) {
      return i + component.config.price;
    }
    return i;
  }, 0);
  return (
    <div>
      <Header />
      <div className="cart">
        <p>Goods in the cart:</p>
        <table className="cart-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {components.map((component, index) => (
              <tr key={index}>
                <td>
                  <p>
                    <strong>{component.type}:</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>
                      {component.config
                        ? component.config.brand + " " + component.config.model
                        : "Not selected"}
                    </strong>
                  </p>
                </td>
                <td></td>
                <td>
                  <p>
                    {component.config
                      ? component.config.price + "$"
                      : "Not selected"}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <p>Total Price: {totalPrice}$</p>
        <button className="buybut">Proceed to Checkout</button>
      </div>
      <Footer />
    </div>
  );
}

export default BuyCart;
