import React from "react";
import "../index.css";
function BuyCart() {
  return (
    <div className="cart">
      <p>Goods in the cart:</p>
      <table className="carttable">
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </table>

      <p>Price:</p>
      <button className="buybut">Get to checkout</button>
    </div>
  );
}
export default BuyCart;
