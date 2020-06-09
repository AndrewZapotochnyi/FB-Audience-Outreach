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
import Filter from "./components/Filter";
import Charts from "./components/Charts";
import {getReachEstimate} from "./helpers/getReachEstimate";

export default function App() {

  
  ///////////////////// FILTER FUNCTIONALITY /////////////////////////
  // Interest State
  const [firstInterest, setFirstInterest] = useState({name: "*interest*"})
  const [filterInterest, setFilterInterest] = useState({id:0, name: ""})
  const [reachEstimates, setReachEstimates] = useState([0,1,2,3])
  const [searchText, setSearchText] = useState("")

  // Submit Form
  const onSubmitInterest = function(input) {
    console.log("Interest is set:", input)
    setSearchText(input);
  }

    useEffect(() => {
      axios.get(`https://graph.facebook.com/search?type=adinterest&q=[${searchText}]&limit=10&locale=en_CA&access_token=271670627217924|m2E7CC78EEGh4O_jI0mm0pVmAiQ`)
      .then(res => {
        if (res) {
          let response = res.data.data[0];
          // console.log(response);
          
          if (response && response.id) {
            setFilterInterest({id: response.id, name: response.name});
            setReachEstimates(getReachEstimate({id: response.id, name: response.name}));
            // console.log(reachEstimates)
          }
          
        } 
      })
    }, [searchText]);
  

  ///////////////////// END OF FILTER FUNCTIONALITY /////////////////////////


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
          <Route path="/">
            <Filter name={firstInterest.name} onSubmitInterest={onSubmitInterest} />
            <Charts reachEstimates={reachEstimates}  />
          </Route>
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
