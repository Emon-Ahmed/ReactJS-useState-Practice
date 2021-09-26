import React from "react";
import "./Body.css";

const Person = (props) => {
  const { photo, name, email, gender, Country, Salary } = props.person;
  return (
    <div>
      <div className="single-person">
        <img src={photo} alt=".." />
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Gender: {gender}</p>
        <p>Country: {Country}</p>
        <p>Salary: ${Salary}</p>
        <hr />
        <button onClick={() => props.handleCart(props.person)}>Add</button>
      </div>
    </div>
  );
};

export default Person;
