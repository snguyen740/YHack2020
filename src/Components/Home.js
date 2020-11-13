import React from 'react';
import Home from './Home.css';
import { NavLink } from 'react-router-dom';
import Button from './Button.jsx';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="content">
        <h1> Helping Hands </h1>
        <div className="subcontent">
          <h2> An organization dedicated to help you help others.  </h2>
          <p> An application to connect you to organizations, communities, and charities. </p>
        </div>
        <NavLink activeClassName="selected" to="/ibegin">
          <Button color='#B6CBFE' size='25px' width='250px'>
            Volunteer
          </Button>
        </NavLink>

        <NavLink activeClassName="selected" to="/">
          <Button color='#B6CBFE' size='25px' width='250px'>
            Organization
          </Button>
        </NavLink>
        <div className="floatingPerson">
          <img src={floating} alt="floating"/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;