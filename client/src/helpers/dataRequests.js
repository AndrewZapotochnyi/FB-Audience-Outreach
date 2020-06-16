const axios = require('axios');
const countryCodeDataSet = require('./countryCodeDataSet')

// THESE REQUESTS AREN'T USED - OUTLINE FOR OUR ORIGIN DATA REQUESTS

// Step 1 - Loop through the country array to find country_code
// See /components/Country.js

// Step 2 - After the country_code has been retrieved, do a city search

let access_token = process.env.REACT_APP_ACCESS_TOKEN;
let account_number = process.env.REACT_APP_ACC_NUM;
let cityStep2 = "Paris";
let country_code = "FR";

axios.get(`https://graph.facebook.com/v7.0/search/?location_types=city&q=${cityStep2}&country_code=${country_code}&type=adgeolocation&access_token=${access_token}`)
.then(res => {
  console.log("Step 2: ", res.data);
})
.catch(res => console.log(res.error));

// Step 3 - Grab the key and region_id from the city item that was selected/the first city


// Step 4 - Input city/country data into interest query  

let key = "296875"
let cityStep4 = "Toronto"
let region = "Ontario"
let region_id = "533" 
let country_codeStep4 = "CA"

axios.get(`https://graph.facebook.com/v7.0/act_${account_number}/reachestimate?access_token=${access_token}&__activeScenarioIDs=%5B%5D&__activeScenarios=%5B%5D&_app=ADS_MANAGER&_index=58&_reqName=adaccount%2Freachestimate&_reqSrc=AdsTargetingEstimatedReach.react&_sessionID=56312af9a4c00eac&include_headers=false&locale=en_US&method=get&pretty=0&suppress_http_code=1&targeting_spec={
  "age_max": 65,
  "age_min": 13,
  "geo_locations": {
      "cities": [
          {
              "distance_unit": "mile",
              "key": ${key},
              "name": ${cityStep4},
              "region": ${region},
              "region_id": ${region_id},
              "country": ${country_codeStep4}
          }
      ],
      "location_types": [
          "home"
      ]
  },
  "flexible_spec": [
      {
          "interests": [
              {
                  "id": "6003020834693",
                  "name": "Music"
              }
          ]
      },
      {
          "interests": [
              {
                  "id": "6003243604899",
                  "name": "Action movies"
              }
          ]
      }
  ]
}`).then(res => {
   console.log("Step 4: ", res.data);
}).catch(res => {
  console.log("Step 4: ", res.error)
});
