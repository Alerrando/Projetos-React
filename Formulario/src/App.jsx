import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: ""
  })

  const [submit, setSubmit] = useState(false);
  const [valid, setValid] = useState(false)

  const handleFirstNameInputChange = (event) => {
    setValues({...values, firstName: event.target.value})
  }

  const handleLastNameInputChange = (event) => {
    setValues({...values, lastName: event.target.value})
  }

  const handleEmailInputChange = (event) => {
    setValues({...values, email: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(values.firstName && values.lastName && values.email)
      setValid(true)

    setSubmit(true)
  }

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        { submit && valid ? (
          <div className="success-message">
            Sucess ! Thank you fo registering
          </div>

        ): (
          null
        )}


        <input
          onChange={handleFirstNameInputChange}
          value={values.firstName}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {submit && !values.firstName ? <span>Please enter a first name</span> : null}
        

        <input
          onChange={handleLastNameInputChange}
          value={values.lastName}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {submit && !values.lastName ? <span>Please enter a last name</span> : null}
        
        
        <input
          onChange={handleEmailInputChange}
          value={values.email}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {submit && !values.email ? <span>Please enter a email</span> : null}
        
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}