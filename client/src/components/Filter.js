import React, { useEffect, useState } from 'react';
import Age from './filter_components/Age';
import Country from "./Country";
import City from "./City";

export default function Filter(props) {

  const [interest, setInterest] = useState("Enter Interest");

  const onSubmit = function(event) {
    console.log(interest)
    // event.preventDefault()
    props.onSubmitInterest(interest)
  }

  let interestName = {props};

  // console.log(props);

  return (
    <div className="filter">
    <h1>Filter</h1>

      <Country setCountryCode={props.setCountryCode} countryCode={props.countryCode}/>
      <City countryCode={props.countryCode} setCities={props.setCities} cities={props.cities} city={props.city} setCity={props.setCity} />

      <Age setMinAge={props.setMinAge} setMaxAge={props.setMaxAge}/>
      <section className="search" >
  
        <input
          placeholder={interest}
          onChange={event => setInterest(event.target.value)}
          name="search"
          type="text"
        />
        <button type="button" value="Submit" onClick={() => onSubmit(interest)} >Click me!</button>
      
    </section>
  </div>


  )
}
