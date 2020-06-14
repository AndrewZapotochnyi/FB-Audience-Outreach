import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const axios = require('axios');

export default function City(props) {

  let access_token = process.env.REACT_APP_ACCESS_TOKEN;
  let city = props.city;
  let country_code = props.countryCode;

  const [ searchText, setSearchText ] = useState("")
  const [ error, setError ] = useState(false)

  useEffect (() => {
    axios.get(`https://graph.facebook.com/v7.0/search/?location_types=city&q=${searchText}&country_code=${country_code}&type=adgeolocation&access_token=EAABsbCS1iHgBABiggGy6bzJuUpMdCoZAkc3c1pOCdhTMZBGZA7q3mf54Q0EJfoLoywvNPSVDTrYjEf1OOc38jEWietokHb8UVJvJmT91iu0eZCXJUZAX51d66aehVV5qXiIVhPxJOKkpHpT4ZBwUnMr3KjmFZBZB77QZCXAx5ZAtfwqgZDZD`)
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