import React from "react";
import "./Body.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Person = (props) => {
  const { photo, name, email, gender, Country, Salary } = props.person;
  const Plus = <FontAwesomeIcon icon={faPlus} />;

  return (
    <div>
      <div className="single-person">
        <img src={photo} alt=".." />
        <p>{name}</p>
        <p>{email}</p>
        <p>Gender: {gender}</p>
        <p>Country: {Country}</p>
        <p>Salary: ${Salary}</p>
        <button onClick={() => props.handleCart(props.person)}>{Plus}<span>Add</span></button>
      </div>
    </div>
  );
};

export default Person;
