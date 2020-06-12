/////// FULL LIST OF INTERESTS ///////////////////////
// const dataInterests = require('./dataInterests.js');
// let interestsArray = dataInterests.dataInterests;

const axios = require('axios');
require('dotenv').config()
const token = process.env.REACT_APP_ACCESS_TOKEN;
const acct = process.env.REACT_APP_ACC_NUM;

// let interestsArray = [{"id":"6003840140052","name":"Agriculture"},{"id":"6004140335706","name":"Architecture"},{"id":"6002963523717","name":"Aviation"}]

function getReachEstimate(filterInterest, minAge, maxAge, city, interestsArray, selectedInterestCategory ) {

    // console.log("Receiving this: ", filterInterest)
    console.log("Receiving array of interest", interestsArray)

    let reachEstimates = [];

    const requests = [];

    console.log("Min age: ", minAge, "Max age: ", maxAge);

  

  for (let interest of interestsArray) {
    
    const axiosRequest = axios.get(`https://graph.facebook.com/v7.0/act_${acct}/reachestimate?access_token=${token}&__activeScenarioIDs=%5B%5D&__activeScenarios=%5B%5D&_app=ADS_MANAGER&_index=58&_reqName=adaccount%2Freachestimate&_reqSrc=AdsTargetingEstimatedReach.react&_sessionID=56312af9a4c00eac&include_headers=false&locale=en_US&method=get&pretty=0&suppress_http_code=1&targeting_spec={
      "age_max": "${maxAge}",
      "age_min": "${minAge}",
      "geo_locations": {
          "cities": [
              {
                  "distance_unit": "mile",
                  "key": "${city.key}",
                  "name": "${city.name}",
                  "region": "${city.region}",
                  "region_id": "${city.region_id}",
                  "country": "${city.country_code}"
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
                      "id": "${filterInterest.id}",
                      "name": "${filterInterest.name}"
                  }
              ]
          },
          {
              "${selectedInterestCategory}": [
                  {
                      "id": "${interest.id}",
                      "name": "${interest.name}"
                  }
              ]
          }
      ]
    }&xref=f376957e49d959c`)
    // .then(resp => {
    //     // console.log(`People who live in Toronto, like ${filterInterest.name} and...`)
    //     // console.log(interest.name)
    //     // console.log(resp.data);
    //     reachEstimates.push(resp.data)
    // });

    
    

    requests.push(axiosRequest.then(res => {
            return {...res, interest_name: interest.name}
        }
        ));
  }

  return Promise.all(requests);
  
//     .then((all) => {
//       console.log("Here is the smth", all);
//   })

//   return reachEstimates;

}


export {getReachEstimate};