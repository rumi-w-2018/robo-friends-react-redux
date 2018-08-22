import React, { Component } from 'react';

class CounterButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1
    };
  }

  // Re-render only when the state changes
  shouldComponentUpdate(nextProps, nextState) {
    //console.log(nextProps, nextState);
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  updateCount = () => {
    this.setState(state => {
      return {
        count: this.state.count + 1
      };
    });
  };

  render() {
    //console.log('counter');
    return (
      <button id="counter" color={this.props.color} onClick={this.updateCount}>
        Count: {this.state.count}
      </button>
    );
  }
}

export default CounterButton;
