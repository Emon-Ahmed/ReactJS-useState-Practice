import React from "react";
import "./Body.css";
import Cart from "./Cart";
import Person from "./Person";

const Body = () => {
  return (
    <div>
      <div className="body">
        <div className="container">
          <div className="person">
            <div className="per-person">
              <Person></Person>
            </div>
            <div className="cart-person">
              <Cart></Cart>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
