'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

export default function (ComposedComponent) {
    class Authentication extends Component {
        //check auth before mount
        componentWillMount() {
            if (!this.props.authenticated) {
                browserHistory.push('/');
            }
        }
        //check auth on updated
        componentWillUpdate(newProps) {
            if (!newProps.authenticated) {
                browserHistory.push('/');
            }
        }

        //if authed, render component
        render() {
            return <ComposedComponent {...this.props}/>;
        }
    }

    function mapStateToProps(state) {
        return {
            authenticated: state.auth.authenticated
        }
    }

    return connect(mapStateToProps)(Authentication);
}