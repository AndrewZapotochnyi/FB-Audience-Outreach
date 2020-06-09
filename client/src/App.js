import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Navigation from "./components/Nav";
import Filter from "./components/Filter";
import Charts from "./components/Charts";
import {getReachEstimate} from "./helpers/getReachEstimate";

function App() {

  ///////////////////// FILTER FUNCTIONALITY /////////////////////////
  // Interest State
  const [firstInterest, setFirstInterest] = useState({name: "Andrew"})
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
        setFirstInterest({name: res.data[1].name})
      } 
    })
  }, [])


  return (
    <div className="App">
         <Navigation name={firstInterest.name}  />
         <Filter name={firstInterest.name} onSubmitInterest={onSubmitInterest} />
         <Charts reachEstimates={reachEstimates}  />
      
    </div>
  );
}

export default App;
