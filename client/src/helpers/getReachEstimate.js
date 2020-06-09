/////// FULL LIST OF INTERESTS ///////////////////////
// const dataInterests = require('./dataInterests.js');
// let interestsArray = dataInterests.dataInterests;

const axios = require('axios');


let interestsArray = [{"id":"6003584163107","name":"Advertising"},{"id":"6003840140052","name":"Agriculture"},{"id":"6004140335706","name":"Architecture"},{"id":"6002963523717","name":"Aviation"}]

function getReachEstimate(filterInterest) {

    console.log("Receiving this: ", filterInterest)

    let reachEstimates = [];

  for (let interest of interestsArray) {
    
    axios.get(`https://graph.facebook.com/v7.0/act_78062339/reachestimate?access_token=EAAD3FT87MgQBAMXnuwrpSy9KOQQP1oJo68taLjvdqjPUTPS6QZBdO4UNzzV3gwPDK9D5nzl0AnbmhgEJs4YkCezyod4ZAhViVFMJLa321ojoM2cEpkXzsVSiSaqZAwfKfrZABox9BcAnQqe1rLJdjpjyCUwzJf4J1QVLca6xYnKpWjqngTTZAacZAUpbO3WGP4LPfhZAWAR48DKRYIhDKD6MeZBLnAAYNpB0Q7a8g3130gZDZD&__activeScenarioIDs=%5B%5D&__activeScenarios=%5B%5D&_app=ADS_MANAGER&_index=58&_reqName=adaccount%2Freachestimate&_reqSrc=AdsTargetingEstimatedReach.react&_sessionID=56312af9a4c00eac&include_headers=false&locale=en_US&method=get&pretty=0&suppress_http_code=1&targeting_spec={
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
                      "id": "${filterInterest.id}",
                      "name": "${filterInterest.name}"
                  }
              ]
          },
          {
              "interests": [
                  {
                      "id": "${interest.id}",
                      "name": "${interest.name}"
                  }
              ]
          }
      ]
    }&xref=f376957e49d959c`).then(resp => {
        // console.log(`People who live in Toronto, like ${filterInterest.name} and...`)
        // console.log(interest.name)
        // console.log(resp.data);
        reachEstimates.push(resp.data)
    });

  }

  return reachEstimates;

}


export {getReachEstimate};