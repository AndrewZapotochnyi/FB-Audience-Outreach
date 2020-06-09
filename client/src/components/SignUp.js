import React from 'react';
import {
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link
} from "react-router-dom";
import Login from './Login'

export default function SignUp() {
  return (
    <Router>
      <>
        <h1>Create An Account:</h1>
        <form>
          <label>
            <input type="text" name="first_name" placeholder="First Name"></input>
            <input type="text" name="last_name" placeholder="Last Name"></input>
            <input type="text" name="email" placeholder="Email"></input>
            <input type="text" name="password" placeholder="Password"></input>
            <input type="text" name="password_confirmation" placeholder="Password Confirmation"></input>
          </label>
          <input type="submit" value="Submit"></input>
        </form>
        <Link to="/login">Already have an account?</Link>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </>
    </Router>
  )
}