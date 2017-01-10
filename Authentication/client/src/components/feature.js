'use strict';

import React, { Component } from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';

class Feature extends Component {
    componentWillMount() {
        this.props.fetchMessage();
    }
    
    render() {
        return (
            <div> This is a feature </div>
        )
    }
}

export default connect(null, actions)(Feature);