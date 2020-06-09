import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link
} from "react-router-dom";
import axios from 'axios';
import './App.css';
import Login  from './components/Login';
import About from './components/About';
import SignUp from './components/SignUp';
import Home from './components/Home';

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
        <nav className="Nav">
          <div className="Nav-logo-title">
            <img src="https://clarkstjames.com/wp-content/uploads/2017/05/audience_research-e1495193156392.jpg" alt="Drawing of Professional People" width="200"></img>
            <h1><Link to="/home">Audience Research</Link></h1>
          </div>
          <div className="Nav-links">
            <button className="Nav-button">
              <Link to="/about">About</Link>
            </button>
            <button className="Nav-button">
              <Link to="/signup">Sign Up</Link>
            </button>
            <button className="Nav-button">
              <Link to="/login">Login</Link>
            </button>
          </div> 
        </nav>

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
