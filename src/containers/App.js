import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getRobots } from '../actions';
import MainPage from '../components/MainPage';

class App extends Component {
  render() {
    return <MainPage {...this.props} />;
  }
}

const mapStateToProps = ({ robots, searchKey }) => {
  return { robots, searchKey };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getRobots }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
