import React, { useRef, useState } from "react";

// Importing the style file
import "../css/Form.css";

// Importing the costume components
import Checkbox from "./Checkbox";

// Creatning the Form component
const Form = () => {
  // Defining the state and the refs
  const [pwd, setPwd] = useState("Generated password...");

  const lengthRef = useRef();
  const includeSigns = useRef();
  const includeNumbers = useRef();

  return (
    <form className="form-container">
      <h1>Generate Password</h1>
      <input type="button" value={pwd} className="pwd-container" />
      <div className="input-container">
        <label htmlFor="lenght">Password length</label>
        <input
          type="number"
          name="length"
          inputMode="numeric"
          ref={lengthRef}
        />
      </div>
      <div className="input-container">
        <label htmlFor="signs">Include symbols</label>
        <Checkbox name="signs" ref={includeSigns} />
      </div>
      <div className="input-container">
        <label htmlFor="numbers">Include numbers</label>
        <Checkbox name="numbers" ref={includeNumbers} />
      </div>
    </form>
  );
};

// Exporting the Form component
export default Form;
