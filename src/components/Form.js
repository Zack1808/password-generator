import React, { useRef, useState } from 'react'

// Importing the style file
import '../css/Form.css';

// Importing helper functions
import { generatePassowrd } from '../utils/form.utils';

// Creating the Form component
const Form = () => {

  const numberRef = useRef();
  const symbolRef = useRef();
  const lengthRef = useRef();

  const [password, setPassword] = useState('')

  // Function that will handle the submition of the from and generate a random password
  const onSubmit = (e) => {
    e.preventDefault();
    setPassword(generatePassowrd(numberRef.current.checked, symbolRef.current.checked, lengthRef.current.value || 6))
  }
  

  return (
    <form className='password-form' onSubmit={onSubmit}>
      <h2>Generate a secure password!</h2>
      <div className='passowrd-inputs'>
        <h4 className='password-text'>{password}</h4>
        <div className="flex">
          <label htmlFor="password-length">Password Length</label>
          <input type="number" max={72} min={6} name="password-length" style={{ maxWidth: "8ch"}} ref={lengthRef} />
        </div>
        <div className="flex">
          <label htmlFor="numbers">Include Numbers</label>
          <input type="checkbox" name="numbers" ref={numberRef} />
        </div>
        <div className="flex">
          <label htmlFor="symbols">Include Symbols</label>
          <input type="checkbox" name="symbols" ref={symbolRef} />
        </div>
        <button className="btn">Generate</button>
      </div>
    </form>
  )
}

export default Form