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






  const Charts = ({ reachEstimates }) => {
  

  

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
      <ul>
        {/* {chartsRender} */}
        <HorizontalBar
          data={defaultChartsData}
          width={100}
          height={250}
          options={{
            maintainAspectRatio: false
          }}
        />
      </ul>
    );
}

export default Charts;