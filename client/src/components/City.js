import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const axios = require('axios');

export default function City(props) {

  const cityToken = process.env.REACT_APP_CITY_TOKEN;
  let city = props.city;
  let country_code = props.countryCode;

  const [ searchText, setSearchText ] = useState("")
  const [ error, setError ] = useState(false)

  useEffect (() => {
    axios.get(`https://graph.facebook.com/v7.0/search/?location_types=city&q=${searchText}&country_code=${country_code}&type=adgeolocation&access_token=${cityToken}`)
    .then(res => {
      props.setCities(res.data.data);
    })
    .catch(res => console.log(res));
  }, [searchText, country_code])

  return (
    <div className="Autocomplete">
      <Autocomplete
        id="city-dropdown"
        options={props.cities}
        getOptionLabel={(option) => option.name}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Choose A City" variant="outlined"/>}
        onChange={(event, value) => props.setCity(value)}
        onInputChange={(event, value) => setSearchText(value)}
      />
    </div>
  )
}