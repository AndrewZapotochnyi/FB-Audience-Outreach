import React, { useState, useEffect } from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

// Not using but something we want to try to add later 
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