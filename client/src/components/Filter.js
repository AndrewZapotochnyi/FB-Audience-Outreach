import React, { useState } from 'react';
import Age from './filter_components/Age';
import Country from "./Country";
import City from "./City";
import { Redirect } from 'react-router';

import Interest from "./Interest";

export default function Filter(props) {

  const [interest, setInterest] = useState("Enter Interest");

  const onSubmit = function(event) {
    console.log(interest)
    // event.preventDefault()
    props.onSubmitInterest(interest)
  }

  let interestName = {props};

  // console.log(props);
  if (!props.loggedIn) {
    return (<Redirect to="/access" />) 
  };

  return (
    <div className="Filter">
    <h1 className="Filter Filter-header">Filter</h1>

      <Country setCountryCode={props.setCountryCode} countryCode={props.countryCode}/>
      <City countryCode={props.countryCode} setCities={props.setCities} cities={props.cities} city={props.city} setCity={props.setCity} />
      <Age setMinAge={props.setMinAge} setMaxAge={props.setMaxAge}/>
      <section className="search">
        {/* <input
          placeholder={interest}
          onChange={event => setInterest(event.target.value)}
          name="search"
          type="text"
        /> */}

        <Interest setInterest={setInterest}/>

        { props.city === null &&
          <div>
            <button className="Search-button" type="button" value="Submit" onClick={() => {
                // onSubmit(interest)
              }
        }>Search</button>
            <div className="chose-city"><b>Choose city first! </b></div>
          </div>
        }
        
        { props.city && <button className="Search-button" type="button" value="Submit" onClick={() => {
            onSubmit(interest)
        }
        }>Search</button>}
    </section>
  </div>
  )
}
