import React from 'react';

export default function Login() {
  return (
    <>
      <h1>Login Here:</h1>
      <form>
          <label>
            <input type="text" name="email" placeholder="Email"></input>
            <input type="text" name="password" placeholder="Password"></input>
          </label>
          <input type="submit" value="Login"></input>
      </form>
    </>
  )
}