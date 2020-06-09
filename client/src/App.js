import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

export default function App() {

  const [firstInterest, setFirstInterest] = useState({name: "*interest*"})

  useEffect(() => {
    axios.get('/interests')
    .then(res => {
      if (res.data) {
        setFirstInterest({name: res.data[0].name})
      } 
    })
    .catch(res => console.log(res))
  }, [])


  return (

    <Router>
      <div>
        <nav>
          <label>
            <img src="https://clarkstjames.com/wp-content/uploads/2017/05/audience_research-e1495193156392.jpg" alt="Drawing of Professional People" width="200"></img>
            <h1>
              <Link to="/">Audience Research</Link>
            </h1>
          </label>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/">

          </Route>
          <Route path="/about">

          </Route>
          <Route path="/signup">
            
          </Route>
          <Route path="/login">
            
          </Route>
        </Switch>
      </div>

      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

    </Router>
  );
}
