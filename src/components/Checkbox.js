import React, { forwardRef, useState } from "react";
import { UilCheck } from "@iconscout/react-unicons";

// Importing the style file
import "../css/Checkbox.css";

// Creating the Checkbox component
const Checkbox = forwardRef(({ name }, ref) => {
  // Defining the state
  const [checked, setChecked] = useState(false);

  return (
    <label
      htmlFor={name}
      className={`check-container ${checked && "active"}`}
      onClick={() => setChecked((prevState) => !prevState)}
    >
      <input type="checkbox" name={name} ref={ref} />
      {checked && <UilCheck />}
    </label>
  );
});

// Exporting the Checkbox component
export default Checkbox;
