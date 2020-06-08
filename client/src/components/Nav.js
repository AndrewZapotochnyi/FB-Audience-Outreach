import React from 'react';
import NavLink from './NavLink'

export default function Navigation(props) {

  return (
    <nav>
      <img src="https://clarkstjames.com/wp-content/uploads/2017/05/audience_research-e1495193156392.jpg" alt="Drawing of Professional People" width="200"></img>
      <h1>Audience Research</h1>
      <section className="nav_links">
        <NavLink onClick={props.aboutPage}>About</NavLink>
        <NavLink onClick={props.loginPage}>Login</NavLink>
        <NavLink onClick={props.signUpPage}>Sign Up</NavLink>
      </section>
    </nav>
  )
}
