import React from "react";
import "./Body.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Person = (props) => {
  // Destructuring Person 
  const {age, designation, photo, name, email, gender, Country, Salary } = props.person;
    
  // FontAwesome icon Declare
  const Plus = <FontAwesomeIcon icon={faPlus} />;

  return (
    <div>
      <div className="single-person">
        <img src={photo} alt=".." />
        <p className="person-title">{name}</p>
        <p className="person-designation">{designation}</p>
        <p>Email: {email}</p>
        <p>Age: {age}</p>
        <p>Gender: {gender}</p>
        <p>Country: {Country}</p>
        <p>Salary: ${Salary}</p>
        <button onClick={() => props.handleCart(props.person)}>{Plus} <span>Add</span></button>
      </div>
    </div>
  );
};

export default Person;