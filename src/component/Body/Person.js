import React from "react";
import "./Body.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Person = (props) => {
  const { designation, photo, name, email, gender, Country, Salary } =
    props.person;
  const Plus = <FontAwesomeIcon icon={faPlus} />;

  return (
    <div>
      <div className="single-person">
        <img src={photo} alt=".." />
        <p className="text-center">{name}</p>
        <p className="text-center line-height-md">{designation}</p>
        <p>Email: {email}</p>
        <p>Gender: {gender}</p>
        <p>Country: {Country}</p>
        <p>Salary: ${Salary}</p>
        <button onClick={() => props.handleCart(props.person)}>
          {Plus}
          <span>Add</span>
        </button>
      </div>
    </div>
  );
};

export default Person;
