import React, { useState } from "react";
import "../index.css";
import Header from "./header";
import Checkout from "./checkout";
import Footer from "./footer";
function CheckoutPage(totalPrice) {
  return (
    <div>
      <Header />
      <Checkout totalPrice={totalPrice} />
      <Footer />
    </div>
  );
}
export default CheckoutPage;
