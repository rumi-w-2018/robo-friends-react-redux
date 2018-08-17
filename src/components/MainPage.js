import React, { Component } from 'react';
import Cards from './Cards';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';
import Header from './Header';
import './MainPage.css';

class MainPage extends Component {
  componentDidMount() {
    this.props.getRobots();
  }

  filterRobots = () => {
    const { searchKey, robots } = this.props; // Destructuring: this.props.robots becomes robots
    return robots.data.filter(robot => {
      return robot.name.toLowerCase().includes(searchKey);
    });
  };

  render() {
    const { robots } = this.props; // Destructuring: this.props.robots becomes robots

    if (robots.isPending) {
      return <h1 className="white pa3">Please wait...</h1>;
    } else if (!robots || robots.isError || robots.data.length === 0) {
      return <h1 className="white pa3">No robots were retrieved.</h1>;
    }

    return (
      <div className="animation-effect pv5 ph2 ma0 tc">
        <Header />
        <SearchBox onSearchChange={this.onSearchChange} />
        <hr className="custom" />
        <Scroll>
          <ErrorBoundary>
            <Cards robots={this.filterRobots()} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
