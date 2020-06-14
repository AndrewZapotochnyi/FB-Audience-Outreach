import React, { useState, useEffect } from 'react';

import {HorizontalBar} from 'react-chartjs-2';


// width={800}
// height={500}

// const defaultChartsData = {
//   labels: [],
//   datasets: [
//     {
//       label: 'My First dataset',
//       backgroundColor: 'rgba(255,99,132,0.2)',
//       borderColor: 'rgba(255,99,132,1)',
//       borderWidth: 1,
//       hoverBackgroundColor: 'rgba(255,99,132,0.4)',
//       hoverBorderColor: 'rgba(255,99,132,1)',
//       data: []
//     }
//   ]
// };

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));





  const Charts = ({ reachEstimates, setSelectedInterestCategory, onSubmitInterest, filterInterest, onSaveAudience }) => {
  
  // const categoryTypes = ["family_statuses" , "industries", "interests", "behaviors", "income"]
  
 

  // const typesRender = categoryTypes.map(type => {
  //   return (
  //     <Button style={{
  //       color: "black",
  //       borderColor: "black"
  //       }} onClick={() => {
        
  //       setSelectedInterestCategory(type)
        
  //     }}>{type}</Button>)
  //   });


  const categoryTypesSmart = [["family_statuses", "Family", 80 ], ["interests", "Interests", 100], ["behaviors", "Behaviours", 100 ], ["industries", "Industries", 240 ], ["income", "Income", 40]]

  const typesRender = categoryTypesSmart.map(type => {
      return (
        <Button style={{
          color: "black",
          borderColor: "black"
          }} onClick={() => {
          
          setSelectedInterestCategory(type[0])
          
        }}>{type[1]}</Button>)
      });
    
    if (reachEstimates[0].data.error) {
      return (<div className="facebook-api-error">
        <h2>Sorry.</h2>
          <p> Due to the limitations of Facebook API, we can only have 200 requests/per hour. This message means that we have reached the limit. 
          Please wait a few minutes before trying again.
          See more details about this error from Facebook below:
          </p>
        <div>{reachEstimates[0].data.error.message}</div>
      </div>)
    }
  
    const defaultChartsData = {
      labels: reachEstimates ? reachEstimates.map(item => item.interest_name) : [],
      datasets: [
        {
          label: 'Audience Results',
          backgroundColor: 'rgba(253, 123, 95, 0.25)',
          borderColor: 'rgba(253, 123, 95, 1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(253, 123, 95, 0.5)',
          hoverBorderColor: 'rgba(253, 123, 95, 1)',
          data: reachEstimates ? reachEstimates.map(item => item.data.data.users) : []
        }
      ]
    };

    

    return (
      <div className="Charts-section">
        <h1 className="">Results Report</h1>
        <div className="chart-buttons-all">
          <ButtonGroup className="category-buttons" color="primary" aria-label="outlined primary button group">
            {typesRender}
          </ButtonGroup>

          <button class="save-search-button" onClick={() => onSaveAudience()}> Save Search </button>
        </div>

        

        {/* {chartsRender} */}
        <div className="Chart">
          <HorizontalBar
            data={defaultChartsData}
           
            height={1500}
  
            options={{
              maintainAspectRatio: false
            }}
          />
        </div>
      </div>
    );
  }

export default Charts;