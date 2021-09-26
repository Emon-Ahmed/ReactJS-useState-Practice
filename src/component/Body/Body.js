import React, { useEffect, useState } from "react";
import "./Body.css";
import Cart from "./Cart";
import Person from "./Person";

const Body = () => {
  //   Calling JSON API
  const [person, setPerson] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setPerson(data));
  }, []);

  //   Handling Cart
  const [cart, setCart] = useState([]);
  const handleCart = (person) => {
    const newCart = [...cart, person];
    setCart(newCart);
  };

  return (
    <div>
      <div className="body">
        <div className="container">
          <div className="person">
            <div className="per-person">
              {person.map((person) => (
                <Person
                  person={person}
                  handleCart={handleCart}
                  key={person.key}
                ></Person>
              ))}
            </div>
            <div className="cart-person">
              <Cart cart={cart}></Cart>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;