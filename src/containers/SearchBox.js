import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSearchKey } from '../actions';


class SearchBox extends Component {

    /* 
    * Alternatively onSearchChange={this.onSearchChange.binc(this)} in Input
    * Arrow function makes 'this' lexical 'this'
    * Remember that functions other than react built-in functions can be arrow functions
    * */

    onSearchChange = (event) => {
        this.props.setSearchKey(event.target.value.toLowerCase());
    };

    render() {
        return(
            <div className='pa2'>
                <input id="search" className='pa3 ba b--light-green bw1'
                    arial-label="Search Robots" 
                    type='search' placeholder='Search Robots' 
                    alt='search'
                    onChange={this.onSearchChange} />
                
            </div>
        );
    }
}

const mapStateToProps = ({ searchKey }) => {
    return { searchKey };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators( { setSearchKey }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);