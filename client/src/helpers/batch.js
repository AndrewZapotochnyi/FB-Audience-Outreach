/////// FULL LIST OF INTERESTS ///////////////////////
// const dataInterests = require('./dataInterests.js');
// let interestsArray = dataInterests.dataInterests;

const axios = require('axios');
require('dotenv').config()
const token = process.env.REACT_APP_ACCESS_TOKEN;
const acct = process.env.REACT_APP_ACC_NUM;

// Batch experiment - intend on using use later 

// let interestsArray = [{"id":"6003840140052","name":"Agriculture"},{"id":"6004140335706","name":"Architecture"},{"id":"6002963523717","name":"Aviation"}]

function getBatchEstimates()  {

  batch=[{ 
    "method": "GET",
    "relative_url": `https://graph.facebook.com/v7.0/act_78062339/reachestimate?access_token=EAAD3FT87MgQBABJtdxDZCQDgFrZAmZB624jnZBzB9SNRXeAYGVZB35ZBz66kAo9jYFkaPjWniRNVVroUwZCt4JqxyBpWZCrGNmLTfweZCYIy27a8ZAL3skl1CjA0tLXYO95xg8vzgb7cfWcn2Be7ZBRDJ1BuyZA720SiyqdrnxKuZBh63NQXBr3OeigWrwCYCOprCB714V3xZCpu0FJaPlYUZATPyxd9S1AG2daotriXrWSZC1VMegZDZD&__activeScenarioIDs=%5B%5D&__activeScenarios=%5B%5D&_app=ADS_MANAGER&_index=58&_reqName=adaccount%2Freachestimate&_reqSrc=AdsTargetingEstimatedReach.react&_sessionID=56312af9a4c00eac&include_headers=false&locale=en_US&method=get&pretty=0&suppress_http_code=1&targeting_spec={
      "age_max": 65,
      "age_min": 13,
      "geo_locations": {
          "cities": [
              {
                  "distance_unit": "mile",
                  "key": "296875",
                  "name": "Toronto",
                  "region": "Ontario",
                  "region_id": "533",
                  "country": "CA"
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
  }&xref=f376957e49d959c`,
  
  
}]
    
  const batchRequest = axios.post(`https://graph.facebook.com/reachestimate?batch=[${batch}]`)

  return Promise.resolve(batchRequest);
  
  }

console.log("-----------------------------------------------------------------")
  getBatchEstimates()
  .then(res => console.log(res.data.error))
  .catch(console.error);
  

