import React from 'react';
import './Links.css'

export default function Login() {
  return (
    <>
      <h1 className="Link-title">Login Here:</h1>
      <div className="Link-body-surrounding">
        <form className="Link-form">
          <input type="text" name="email" placeholder="Email"></input>
          <input type="text" name="password" placeholder="Password"></input>
          <input type="submit" value="Login" class="Link-button"></input>
        </form>
      </div>
      <a href="signup" className="Link-redirect">Don't have an account?</a>
    </>
  )
}