import React, { Component } from 'react';
import Navbar from './Navbar';

class Header extends Component {
  state = {
    activeIndex: null
  }
  handleClick = (index) => this.setState({ activeIndex: index });
  render() {
    const clickables = [
    { name: "Home" },
    { name: "About" },
    { name: "Volunteer/orgs" },
    { name: "SignIn/SignUp" },
    { name: "Calendar" }
  ];
  return (
    <div>
    <ul>
      { clickables.map((clickable, i) => {
          return <Navbar 
            key={ clickable.name }
            name={ clickable.name }
            index={ i }
            isActive={ this.state.activeIndex === i }
            onClick={ this.handleClick }
          />
        })
      }
  </ul>
</div>
  )
  }
}

export default Header;