import React from "react";
import "./Body.css";

const Cart = (props) => {
  const { cart } = props;
  
  const totalReducer = (preValue2, currentVal2) => (preValue2 + currentVal2.Salary);
  const finalTotal = cart.reduce(totalReducer, 0);
  const total = parseFloat(finalTotal);
  return (
    <div>
      <div className="cart">
        <p>Total Players: {cart.length} </p>
        <p>Total Cost: ${total} </p>
        <div className="player-list">
          <p>Players Name:</p>
          <ul>
            {cart.map((person) => (
              <li>{person.name}</li>
            ))}
          </ul>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Cart;
