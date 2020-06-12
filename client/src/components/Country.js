import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const axios = require('axios');

export default function Country(props) {

  const [ countries, setCountries ] = useState(["Canada"]);

  useEffect (() => {
    axios.get('/countries')
    .then(res => {
        setCountries(res.data)
    })
    .catch(res => console.log(res))
  }, [])

  // if (!props.countryCode) {
  //   props.setCountryCode("CA")
  // }


  return (
    <Autocomplete
      id="country-dropdown"
      options={countries}
      getOptionLabel={(option) => option.name}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Choose A Country" variant="outlined"/>}
      onChange={(event, value) => {
        if (!value) {
          props.setCountryCode("CA")
          
        } else {
          props.setCountryCode(value.country_code)
        }
        
        
      }}
    />
  )
}
