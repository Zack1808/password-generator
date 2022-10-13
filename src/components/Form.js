import React from 'react'

// Importing the style file
import '../css/Form.css';

// Creating the Form component
const Form = () => {
  return (
    <form className='password-form'>
      <h2>Generate a secure password!</h2>
      <div className='passowrd-inputs'>
        <h4 className='password-text'>fadsfdas</h4>
        <div className="flex">
          <label htmlFor="password-length">Password Length</label>
          <input type="number" max={72} min={6} name="password-length" style={{ maxWidth: "8ch"}} />
        </div>
        <div className="flex">
          <label htmlFor="numbers">Include Numbers</label>
          <input type="checkbox" name="numbers" />
        </div>
        <div className="flex">
          <label htmlFor="symbols">Include Symbols</label>
          <input type="checkbox" name="symbols" />
        </div>
        <button className="btn">Generate</button>
      </div>
    </form>
  )
}

export default Form