import React, { Component } from 'react';
import CounterButton from './CounterButton';

class Header extends Component {
  // Prevent Header to be re-rendered.
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <h1 className="page-title mt0 white ttu">RoboFriends</h1>
        <CounterButton color={'red'} />
      </div>
    );
  }
}

export default Header;
