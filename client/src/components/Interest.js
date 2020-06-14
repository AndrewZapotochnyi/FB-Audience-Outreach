import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
const axios = require('axios');

export default function Interest(props) {
  let access_token = process.env.REACT_APP_ACCESS_TOKEN;
  let country_code = props.countryCode;

  const [ searchText, setSearchText ] = useState("")
  const [ interestOptions, setInterestOptions ] = useState([])

  useEffect (() => {
    axios.get(`https://graph.facebook.com/search?type=adinterest&q=[${searchText}]&limit=10&locale=en_CA&access_token=${access_token}`)
    .then(res => {
      setInterestOptions(res.data.data);
    })
    .catch(console.error);
  }, [searchText])

  // return (
  //   <input
  //     placeholder={interest_name}
  //     onChange={event => props.setInterest(event.target.value)}
  //     name="search"
  //     type="text"
  //   />
  // )
  return (
    <div className="Autocomplete">
      <Autocomplete
        id="interest-dropdown"
        options={interestOptions}
        getOptionLabel={(option) => option.name}
        getOptionSelected={(option, value) => option.id === value.id}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Interest Search" variant="outlined"/>}
        onChange={(event, value) => {props.setInterest(value.name); console.log("Value onchange", value.name)}}
        onInputChange={(event, value) => setSearchText(value)}
      />
    </div>
  )
}