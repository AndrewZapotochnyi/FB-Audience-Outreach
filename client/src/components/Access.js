import React, { useState } from 'react';
import './Links.css'
import fetch from 'isomorphic-fetch';
import { Redirect } from 'react-router-dom';

export default function Access(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleOnSubmit = (event) => {
    event.preventDefault()
    let request = {"auth": {"email": email, "password": password}}
    fetch('http://localhost:3001/api/user_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request)
    })
    .then(function(rsp){
      if (!rsp.ok) {
        throw Error(rsp.statusText);
      }
      return rsp.json()
    })
    .then((data) => localStorage.setItem("jwt", data.jwt))
    .then(() => props.setLoggedIn(true))
    .catch(error => {console.log(error)});
  }

  return(
    <div className="Access-page">
    {props.loggedIn ? <Redirect to="/home" /> : <form className="Access-form" onSubmit={(event) => handleOnSubmit(event)}>
      <h1 className="Access-header">Access</h1>
      <input className="Access-field"
        name="email"
        id="email"
        type="email"
        value={email}
        placeholder="Enter Email"
        onChange={(event) => setEmail(event.target.value)}
      />
      <input className="Access-field"
        name="password"
        id="password"
        type="password"
        value={password}
        placeholder="Enter Password"
        onChange={(event) => setPassword(event.target.value)}
        />
      <input className="Login-button" type="submit" value="Enter" />
    </form>}
  </div>
  )
}