import React from 'react';

export default function Age(props) {

  let ageGenerator = function() {
    let ageArray = [];
    for (let i = 13; i < 66; i++) {
      ageArray.push(i);
    }
    return ageArray
  } 

  let ages = ageGenerator();

  const minAgesRender = ages.map(function(item){
    return <option key={item} value={item}>{item}</option>
  })

  const maxAgesRender = ages.map(function(item, i){
    if (i === ages.length - 1) {
      return <option selected={true} key={item} value={item}>{item}</option>
    } else {
      return <option key={item} value={item}>{item}</option>
    }
  })


  return (
    <div className="age">
      <div> Age min</div>
      <select name="age_min" id="age_min" onChange={event => props.setMinAge(parseInt(event.target.value))}>
        {minAgesRender}
      </select>

      <div> Age max</div>
      <select name="age_max" id="age_max" onChange={event => props.setMaxAge(parseInt(event.target.value))}>
        {maxAgesRender}
      </select>

    </div>


  )
}
