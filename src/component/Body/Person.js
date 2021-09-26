import React from "react";
import "./Body.css";

const Person = () => {
  return (
    <div>
      <div className="single-person">
        <img src="" alt=".." />
        <p>Name: </p>
        <p>Email: </p>
        <p>Gender: </p>
        <p>Country:</p>
        <p>Salary: </p>
        <hr />
        <button>Add</button>
      </div>
    </div>
  );
};

export default Person;
