import React, { Component } from 'react';

class Header extends Component {

    // Prevent Header to be re-rendered.
    shouldComponentUpdate() {
        return false;
    }

    render() {
        return(
            <h1 className='page-title mt0 white ttu'>RoboFriends</h1> 
        );
    }
}

export default Header;