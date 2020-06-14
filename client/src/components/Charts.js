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
  
  const categoryTypes = ["family_statuses" , "industries", "interests", "behaviors", "income"]
  
  // console.log("Reach estimates:", reachEstimates);
 
  // let typesRender = function() {
  //   return (<div>
  //     {categoryTypes.map((type, index) => (
  //         <Button>{type}</Button>
  //     ))}
  //     </div>);    
  // }

  const typesRender = categoryTypes.map(type => {
    return (
      <Button onClick={() => {
        // filterInterest={filterInterest} onSubmitInterest={onSubmitInterest}
        setSelectedInterestCategory(type)
        // onSubmitInterest(filterInterest.name)
      }}>{type}</Button> )
    });
  
    if (reachEstimates[0].data.error) {
      return (<div>{reachEstimates[0].data.error.message}</div>)
    }
  
    const defaultChartsData = {
      labels: reachEstimates ? reachEstimates.map(item => item.interest_name) : [],
      datasets: [
        {
          label: 'Audience Results',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: reachEstimates ? reachEstimates.map(item => item.data.data.users) : []
        }
      ]
    };

    console.log("Charts data: ", defaultChartsData);

    return (
      <div className="Charts-section">
        <div>
          <ButtonGroup className="category-buttons" color="primary" aria-label="outlined primary button group">
            {typesRender}
          </ButtonGroup>
        </div>

        {/* <button onClick={() => onSaveAudience()}> Save Search </button> */}

        {/* {chartsRender} */}
        <div className="Chart">
          <HorizontalBar
            data={defaultChartsData}
  
            options={{
              maintainAspectRatio: false
            }}
          />
        </div>
      </div>
    );
  }

export default Charts;