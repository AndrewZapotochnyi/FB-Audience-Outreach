import React from 'react';

export default function Navigation(props) {

  let interestName = {props};

  console.log(props);

  return (
  <h1>Hello {props.name}</h1>
  )
}
