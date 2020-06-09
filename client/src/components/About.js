import React from 'react';
import './Links.css'

export default function About() {
  return (
    <>
      <h1 className="Link-title">About</h1>
      <span className="Link-body">
        We’re a group of junior developers who had an idea. We saw that the lack of resources available to easily analyze demographics and so we built one. We leveraged Facebook’s marketing API to sift through user data. We made it accessible. This is our product.
      </span>
    </>
  )
}