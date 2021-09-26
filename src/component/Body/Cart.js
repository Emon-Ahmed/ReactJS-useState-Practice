import React from "react";
import "./Body.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faDollarSign } from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {
  const { cart } = props;

  const totalReducer = (preValue2, currentVal2) =>
    preValue2 + currentVal2.Salary;
  const finalTotal = cart.reduce(totalReducer, 0);
  const total = parseFloat(finalTotal);

  const User = <FontAwesomeIcon icon={faUser} />;
  const DollarSign = <FontAwesomeIcon icon={faDollarSign} />;
  return (
    <div>
      <div className="cart">
        <p>
          {" "}
          {User} Total Players: {cart.length}{" "}
        </p>
        <p>
          {" "}
          {DollarSign} Total Cost: ${total}{" "}
        </p>
        <div className="player-list">
          <p>Players Name:</p>
          <ol type="1">
            {cart.map((person) => (
              <li>{person.name}</li>
            ))}
          </ol>

          <button>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
