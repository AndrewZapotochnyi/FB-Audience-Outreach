import React, { useState } from 'react';
import './Links.css'
import fetch from 'isomorphic-fetch';
import { Redirect } from 'react-router-dom';

export default function Login(props) {
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
      <div>
      {props.loggedIn ? <Redirect to="/home" /> : <form className="form" onSubmit={(event) => handleOnSubmit(event)}>
      <label htmlFor="email">Email: </label>
      <br />
      <input
        name="email"
        id="email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <br /> <br />
      <label htmlFor="password">Password: </label>
      <br />
      <input
        name="password"
        id="password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        />
      <br /><br />
      <input type="submit" />
        <br />
    </form>}
    </div>
    )
  }

  // return (
  //   <>
  //     <h1 className="Link-title">Login Here:</h1>
  //     <div className="Link-body-surrounding">
  //       <form className="Link-form">
  //         <input type="text" name="email" placeholder="Email"></input>
  //         <input type="text" name="password" placeholder="Password"></input>
  //         <input type="submit" value="Login" className="Link-button"></input>
  //       </form>
  //     </div>
  //     <a href="signup" className="Link-redirect">Don't have an account?</a>
  //   </>
  // )
// }