import React, { useState } from 'react';

export default function Charts(props) {

  
  console.log("Here are pps", props)
  

 

      const chartsRender = props.reachEstimates.map(function(item, i){
        return <li key={i}>{item.data.data.users}</li>
      })
    
    return (
      <ul>
        {chartsRender}
      </ul>
    );
    

  



}
