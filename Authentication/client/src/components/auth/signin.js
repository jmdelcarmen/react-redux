'use strict';

import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions/index';


class SignIn extends Component {
    handleFormSubmit({ email, password }) {
        //call action creator to signin user
        this.props.signInUser({ email, password }); 
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return(
                <div className="alert alert-danger">
                    <strong>Oops!</strong> {this.props.errorMessage}
                </div>
            );
        }
    }

    render() {
        const { fields: { email, password }, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <div className="form-group">
                    <label>Email: </label>
                    <input {...email} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Password: </label>
                    <input {...password} type="password" className="form-control" />
                </div>
                {this.renderAlert()}
                <button className="btn btn-primary" action="submit">Sign in</button>
            </form>
        );
    }
}
function mapStateToProps(state) {
    return {
        errorMessage: state.auth.error
    };
}

export default reduxForm({ 
    form: 'signin',
    fields: ['email', 'password']
}, mapStateToProps, actions)(SignIn);