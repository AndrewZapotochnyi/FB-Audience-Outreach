import React, { useState } from 'react';

export default function Charts(props) {

  console.log("Test props")
  console.log(props)
  

 

      const chartsRender = props.reachEstimates.map(function(item, i){
        console.log(item);
        return <li key={i}>Test</li>
      })
    
    return (
      <ul>
        {chartsRender}
      </ul>
    );
    

  



}
