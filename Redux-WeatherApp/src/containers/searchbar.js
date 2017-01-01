'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' }
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    //fetch weather data here.
    this.props.fetchWeather(this.state.term);
    //clear the input value
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
        <input
          value={this.state.term}
          onChange={this.onInputChange.bind(this)}
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control" />
        <span className="input-group-btn">
          <button className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

//null = no state here.
export default connect(null, mapDispatchToProps)(SearchBar);
