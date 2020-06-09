import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const axios = require('axios');

export default function Country(props) {

  const [ countries, setCountries ] = useState([])

  useEffect (() => {

    axios.get('/countries')
    .then(res => {
        setCountries(res.data)
    })
    .catch(res => console.log(res))
  }, [])

return (
  <Autocomplete
    id="country-dropdown"
    options={countries}
    getOptionLabel={(option) => option.name}
    style={{ width: 300 }}
    renderInput={(params) => <TextField {...params} label="Country Dropdown" variant="outlined"/>}
  />
)

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
