'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
    renderNavLinks() {
        if (this.props.authenticated) {
            //logged in
            return (
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/signout">Sign out</Link>
                    </li>
                </ul>
            );
        }
        //logged out
        return (
            <ul className="nav navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/signin">Sign in</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/signup">Sign up</Link>
                </li>
            </ul>
        );
    }
    
    render() {
        return (
            <nav className="nav navbar-light">
                <Link to="/" className="navbar-brand">Redux Auth</Link>
                {this.renderNavLinks()}
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    };
}

export default connect(mapStateToProps)(Header);