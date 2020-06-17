import React, { useState, useEffect } from 'react';

import {HorizontalBar} from 'react-chartjs-2';


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

  const Saves = ({ saveObject }) => {
  
  if (!saveObject) {
    return <div>No saved interests!</div>
  }
  
  console.log("Here is the saved object in state: ", saveObject )

  const defaultChartsData = {
    labels: saveObject ? saveObject.reachEstimates.map(item => item.interest_name) : [],
    datasets: [
      {
        label: 'Audience Results',
        backgroundColor: 'rgba(253, 123, 95, 0.25)',
          borderColor: 'rgba(253, 123, 95, 1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(253, 123, 95, 0.5)',
          hoverBorderColor: 'rgba(253, 123, 95, 1)',
        data: saveObject ? saveObject.reachEstimates.map(item => item.data.data.users) : []
      }
    ]
  };

  console.log("Charts data: ", defaultChartsData);
  console.log(saveObject.selectedInterestCategory)

  const removeUnderscore = function(interestCategory) {
    return interestCategory.replace("_", " ")
  };
  
  return (
    <div className="Saved-data">
      <div className="Saved-info">
        <h3 className="Saved-info-label">Latest saved search:</h3>
        <span>Results for individuals in {removeUnderscore(saveObject.selectedInterestCategory)} demographic living in {saveObject.city.name}, between the ages of {saveObject.minAge} and {saveObject.maxAge}, and interested in {saveObject.filterInterest.name}.</span>
      </div>
      {/* {chartsRender} */}
      <HorizontalBar
        data={defaultChartsData}
        width={100}
        height={250}
        options={{
          maintainAspectRatio: false
        }}
      />
    </div>
  );
}

export default Saves;