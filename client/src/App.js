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
import Profile  from './components/Profile';
import About from './components/About';
import SignUp from './components/SignUp';
import Filter from "./components/Filter";
import Charts from "./components/Charts";
import Saves from "./components/Saves";
import {getReachEstimate} from "./helpers/getReachEstimate";

require('dotenv').config()
const token = process.env.REACT_APP_ACCESS_TOKEN
export default function App() {

  
  ///////////////////// FILTER FUNCTIONALITY /////////////////////////
  // Interest State
  const [firstInterest, setFirstInterest] = useState({name: "*interest*"})
  const [filterInterest, setFilterInterest] = useState({id:0, name: ""})
  const [reachEstimates, setReachEstimates] = useState([])
  const [searchText, setSearchText] = useState("")
  const [countryCode, setCountryCode] = useState("CA")
  const [cities, setCities] = useState([])
  const [city, setCity] = useState([""])
  const [minAge, setMinAge] = useState(13);
  const [maxAge, setMaxAge] = useState(65);
  const [loggedIn, setLoggedIn] = useState(false);
  const [listOfInterests, setListOfInterests] = useState({})
  const [selectedInterestCategory, setSelectedInterestCategory ] = useState("income")
  const [saveObject, setSaveObject] = useState({})
  
  
  useEffect(() => {
    if (localStorage.jwt) 
    {
      setLoggedIn(true);
      }
    }, [])


  const onSaveAudience = function() {
     setSaveObject({
      "filterInterest": filterInterest,
      "minAge": minAge,
      "maxAge": maxAge,
      "city": city,
      "selectedInterestCategory": selectedInterestCategory,
      "reachEstimates": reachEstimates
    })
    console.log(saveObject)
    
  }
  
  // Submit Form
  const onSubmitInterest = function(input) {
    // console.log("APP JS Interest is set:", input)
    // setSearchText(input);


    


    axios.get(`https://graph.facebook.com/search?type=adinterest&q=[${input}]&limit=10&locale=en_CA&access_token=${token}`)
      .then(res => {
        if (res) {
          let response = res.data.data[0];
          console.log(response);
          
          if (response && response.id) {
            setFilterInterest({id: response.id, name: response.name});
            //setReachEstimates(getReachEstimate({id: response.id, name: response.name}));
            console.log("SELECTED INTERESTS", listOfInterests[selectedInterestCategory])
            getReachEstimate({id: response.id, name: response.name}, minAge, maxAge, city, listOfInterests[selectedInterestCategory], selectedInterestCategory)
            .then(res => {
              // console.log("here is res", res)
              setReachEstimates(res)
              // console.log(res)
            })
          }
          
        } 
      })

  }


    

    // useEffect(() => {
    //   axios.get(`https://graph.facebook.com/search?type=adinterest&q=[${searchText}]&limit=10&locale=en_CA&access_token=${token}`)
    //   .then(res => {
    //     if (res) {
    //       let response = res.data.data[0];
    //       // console.log(response);
          
    //       if (response && response.id) {
    //         setFilterInterest({id: response.id, name: response.name});
    //         //setReachEstimates(getReachEstimate({id: response.id, name: response.name}));
    //         // console.log(reachEstimates)
    //         getReachEstimate({id: response.id, name: response.name}, minAge, maxAge)
    //         .then(res => {
    //           // console.log("here is res", res)
    //           setReachEstimates(res)
    //         })
    //       }
          
    //     } 
    //   })
    // }, [searchText, minAge, maxAge]);
  

  ///////////////////// END OF FILTER FUNCTIONALITY /////////////////////////


  useEffect(() => {
    onSubmitInterest(filterInterest.name)
    }, [selectedInterestCategory])

  ////////////////////// INTERESTS MANAGEMENT //////////////////////////////

  const interestIndustries = [];
  const interestIncome = [];
  const interestLifeEvents = [];
  const interestFamilyStatuses = [];
  const interestRelationshipStatuses = [];
  const interestEducationStatuses = [];
  const interestsInterests = [];
  const interestsBehaviors = [];


  useEffect(() => {
    axios.get('/interests')
    .then(res => {
      if (res.data) {
        setFirstInterest({name: res.data[0].name})
        
        for (let i of res.data) {
          if (i.type_category === "industries") {
            interestIndustries.push({"id": `${i.facebook_id}`,"name":`${i.name}`})
          } else if (i.type_category === "income") {
            interestIncome.push({"id": `${i.facebook_id}`,"name":`${i.name}`})
          } else if (i.type_category === "life_events") {
            interestLifeEvents.push({"id": `${i.facebook_id}`,"name":`${i.name}`})
          } else if (i.type_category === "family_statuses") {
            interestFamilyStatuses.push({"id": `${i.facebook_id}`,"name":`${i.name}`})
          } else if (i.type_category === "relationship_statuses") {
            interestRelationshipStatuses.push({"id": `${i.facebook_id}`,"name":`${i.name}`})
          } else if (i.type_category === "education_statuses") {
            interestEducationStatuses.push({"id": `${i.facebook_id}`,"name":`${i.name}`})
          } else if (i.type_category === "interests") {
            interestsInterests.push({"id": `${i.facebook_id}`,"name":`${i.name}`})
          } else if (i.type_category === "behaviors") {
            interestsBehaviors.push({"id": `${i.facebook_id}`,"name":`${i.name}`})
          }
        }
        
        setListOfInterests({
          industries: interestIndustries,
          income: interestIncome,
          life_events: interestLifeEvents,
          family_statuses: interestFamilyStatuses,
          relationship_statuses: interestRelationshipStatuses,
          education_statuses: interestEducationStatuses,
          interests: interestsInterests.slice(0, 10),
          behaviors: interestsBehaviors.slice(0, 10)
        });


        // console.log("Education Statuses",interestIncome)

      } 
    })
    .catch(res => console.log(res))
  }, [])

  return (
    // <Router>
    //   <div>
    //     <nav className="Nav">
    //       <div className="Nav-logo-title">
    //         <img src="https://clarkstjames.com/wp-content/uploads/2017/05/audience_research-e1495193156392.jpg" alt="Drawing of Professional People" width="200"></img>
    //         <h1><Link to="/home">Audience Research</Link></h1>
    //       </div>
    //       <div className="Nav-links">
    //         <button className="Nav-button">
    //           <Link to="/about">About</Link>
    //         </button>
    //         {!loggedIn && <div><button className="Nav-button">
    //           <Link to="/signup">Sign Up</Link>
    //         </button>
    //         <button className="Nav-button">
    //         <Link to="/login">Login</Link>
    //       </button>
    //       </div>
    //       }
    //       {loggedIn && <div>
    //         <button className="Nav-button" onClick={() => {
    //           localStorage.removeItem("jwt")
    //           setLoggedIn(false)
    //         }
    //         }>Logout</button>
    //         <button className="Nav-botton">
    //         <Link to="/profile">Profile</Link>
    //         </button>
    //       </div>
    //       }
    //       </div> 
    //     </nav>
    //     {/* {mode === CONFIRM && <Confirm        message = "Are you sure you want to delete this interview?"       confirmDelete = {confirmDelete}       onCancel = {errorCancel}     />} */}
    //     <Switch>
    //       <Route path="/home">
    //         <Filter 
    //           name={firstInterest.name} 
    //           onSubmitInterest={onSubmitInterest} 
    //           setMinAge={setMinAge} 
    //           setMaxAge={setMaxAge} 
    //           setCountryCode={setCountryCode} 
    //           countryCode={countryCode} 
    //           setCities={setCities} 
    //           cities={cities} 
    //           city={city} 
    //           setCity={setCity}
    //           city={city}/>
    //         {reachEstimates.length && <Charts reachEstimates={reachEstimates} setSelectedInterestCategory={setSelectedInterestCategory} filterInterest={filterInterest} onSubmitInterest={onSubmitInterest} onSaveAudience={onSaveAudience}/>}
            
    //       </Route>
    //       {/* <Route path="/home">
    //         <Home />
    //       </Route> */}
    //       <Route path="/about">
    //         {saveObject.reachEstimates && <Saves saveObject={saveObject} reachEstimates={reachEstimates} setSelectedInterestCategory={setSelectedInterestCategory} filterInterest={filterInterest} onSubmitInterest={onSubmitInterest} onSaveAudience={onSaveAudience}/>}
    //         <About />
    //       </Route>
    //       <Route path="/signup">
    //         <SignUp />
    //       </Route>
    //       <Route path="/login">
    //         <Login 
    //         setLoggedIn={setLoggedIn}
    //         loggedIn={loggedIn}
    //         />
    //       </Route>
    //       <Route path="/profile">
    //         <Profile/>
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>

    //////////////////////////////// NEW ROUTER ////////////////////////////////////////////

    <Router>
      <div>
        <nav className="Nav">
          <div className="Nav-logo-title">
            <img src="https://clarkstjames.com/wp-content/uploads/2017/05/audience_research-e1495193156392.jpg" alt="Drawing of Professional People" width="200"></img>
          </div>
          <div className="Nav-links">
          <h1><Link to="/home">Audience Research</Link></h1>
          <button className="Nav-button">
            <Link to="/about">About</Link>
          </button>
          <button className="Nav-button">
            <Link to="/">Landing</Link>
          </button>
          {!loggedIn && 
            <div>
              <button className="Nav-button">
                <Link to="/signup">Sign Up</Link>
              </button>
              <button className="Nav-button">
                <Link to="/login">Login</Link>
              </button>
            </div>
          }
          {loggedIn && 
            <div>
              <button className="Nav-button" onClick={() => {
                localStorage.removeItem("jwt")
                setLoggedIn(false)
              }}>
                <Link to="/login">Logout</Link>
              </button>
              <button className="Nav-botton">
                <Link to="/profile">Profile</Link>
              </button>
            </div>
          }
          </div> 
        </nav>
        {/* {mode === CONFIRM && <Confirm        message = "Are you sure you want to delete this interview?"       confirmDelete = {confirmDelete}       onCancel = {errorCancel}     />} */}
        <Switch>
        <Route path="/home">
            <Filter 
              name={firstInterest.name} 
              onSubmitInterest={onSubmitInterest} 
              setMinAge={setMinAge} 
              setMaxAge={setMaxAge} 
              setCountryCode={setCountryCode} 
              countryCode={countryCode} 
              setCities={setCities} 
              cities={cities} 
              city={city} 
              setCity={setCity}
              city={city}
              loggedIn={loggedIn}
              /> 
            {reachEstimates.length && <Charts reachEstimates={reachEstimates} setSelectedInterestCategory={setSelectedInterestCategory} filterInterest={filterInterest} onSubmitInterest={onSubmitInterest} onSaveAudience={onSaveAudience}/>}
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login 
            setLoggedIn={setLoggedIn}
            loggedIn={loggedIn}
            />
          </Route>
          <Route path="/profile">
            <Profile>
            </Profile>
            {saveObject.reachEstimates && <Saves saveObject={saveObject} reachEstimates={reachEstimates} setSelectedInterestCategory={setSelectedInterestCategory} filterInterest={filterInterest} onSubmitInterest={onSubmitInterest} onSaveAudience={onSaveAudience}/>}

          </Route>
        </Switch>
      </div>
    </Router>




  );
}
