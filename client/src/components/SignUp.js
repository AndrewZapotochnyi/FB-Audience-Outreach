import React from 'react';
import './Links.css'

export default function SignUp() {
  return (
    <>
      <h1 className="Link-title">Create An Account:</h1>
      <form className="Link-form">
          <input type="text" name="first_name" placeholder="First Name"></input>
          <input type="text" name="last_name" placeholder="Last Name"></input>
          <input type="text" name="email" placeholder="Email"></input>
          <input type="text" name="password" placeholder="Password"></input>
          <input type="text" name="password_confirmation" placeholder="Password Confirmation"></input>
        <input type="submit" value="Submit" className="Link-button"></input>
      </form>
      <a href="/login" className="Link-redirect">Already have an account?</a>
    </>
  )
}