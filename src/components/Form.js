import React, { useRef, useState } from "react";

// Importing the style file
import "../css/Form.css";

// Creatning the Form component
const Form = () => {
  // Defining the state and the refs
  const [pwd, setPwd] = useState("Generated password...");

  return (
    <form className="form-container">
      <h1>Generate Password</h1>
      <input type="button" value={pwd} className="pwd-container" />
      <div className="character-count">
        <label htmlFor="lenght">Password length</label>
        <input type="number" name="length" inputMode="numeric" />
      </div>
    </form>
  );
};

// Exporting the Form component
export default Form;
