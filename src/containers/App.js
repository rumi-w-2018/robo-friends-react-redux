import React, { Component } from 'react';
import Cards from '../components/Cards';
import SearchBox from './SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from './ErrorBoundary';
import Header from './Header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getRobots } from '../actions'; 
import './App.css';

class App extends Component {

    componentDidMount() {
        this.props.getRobots();
    }

    render() {
        const { searchKey, robots } = this.props; // Destructuring: this.props.robots becomes robots

        if(robots.isPending) {
            return (<h1 className='white pa3'>Please wait...</h1>);

        }else if(!robots || robots.isError || robots.data.length === 0) {
            return (<h1 className='white pa3'>No robots were retrieved.</h1>);
        }

        const filterRobots = robots.data.filter(robot => {
            return robot.name.toLowerCase().includes(searchKey);
        });
        
        return(
            <div className='animation-effect pv5 ph2 ma0 tc'>
                <Header />
                <SearchBox onSearchChange={this.onSearchChange} />
                <hr className='custom' />
                    <Scroll>
                        <ErrorBoundary>
                            <Cards robots={filterRobots} />
                        </ErrorBoundary>
                    </Scroll>
            </div>
        );
    }
}

const mapStateToProps = ({ robots, searchKey }) => {
    return { robots, searchKey };
};

const mapDispatcherToProps = (dispatch) => {
    return bindActionCreators({ getRobots }, dispatch);
};

export default connect(mapStateToProps, mapDispatcherToProps)(App);