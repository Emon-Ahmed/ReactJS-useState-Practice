import React from "react";
import "./Body.css";

const Cart = () => {
  return (
    <div>
      <div className="cart">
        <p>Total Players: </p>
        <p>Total Cost: $ </p>
        <div className="player-list">
          <p>Players Name</p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Cart;
