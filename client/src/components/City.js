import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const axios = require('axios');

export default function City(props) {

  const [ cities, setCities ] = useState(["Toronto"])

  useEffect (() => {

    let access_token = process.env.REACT_APP_ACCESS_TOKEN;
    let account_number = process.env.REACT_APP_ACC_NUM;
    let cityStep2 = "Montreal";
    let country_code = "CA";

    axios.get(`https://graph.facebook.com/v7.0/search/?location_types=city&q=${cityStep2}&country_code=${country_code}&type=adgeolocation&access_token=${access_token}`)
    .then(res => {
      setCities(res.data);
    })
    .catch(res => console.log(res));
  }, [])

  console.log(cities)

  return (
    <Autocomplete
      id="city-dropdown"
      options={cities.data}
      getOptionLabel={(option) => option.name}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="City Dropdown" variant="outlined"/>}
    />
  )
}