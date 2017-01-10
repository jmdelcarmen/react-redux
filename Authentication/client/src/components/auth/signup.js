'use strict';

import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions/index';

class SignUp extends Component {
    render() {
        const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;
        return (
            <form>
                <div className="form-group">
                    <label>Email: </label>
                    <input className="form-control" {...email}/>
                    {email.touched && email.error && <div className="error">{email.error}</div>}
                </div>
                <div className="form-group">
                    <label>Password: </label>
                    <input type="password" className="form-control" {...password}/>
                    {password.touched && password.error && <div className="error">{password.error}</div>}
                </div>
                <div className="form-group">
                    <label>Confirm Password: </label>
                    <input type="password" className="form-control" {...passwordConfirm}/>
                    {passwordConfirm.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}
                </div>

                <button className="btn btn-primary">Sign Up!</button>
            </form>
        );
    }
}

function validate ({ email, password, passwordConfirm }) {
    const errors ={};

    //check empty fields
    for(let field in arguments[0]) { 
        if (!arguments[0][field]) {
            if (field === 'passwordConfirm') {
                errors[field] = `Please confirm your password`;    
            }
            else {
                errors[field] = `Please enter a ${field}`;
            }
        }
    }

    if (password !== passwordConfirm) {
        errors.password = 'Passwords must match';
    }

    return errors;
}

export default reduxForm({
    form: 'SignUp',
    fields: ['email', 'password', 'passwordConfirm'],
    validate
})(SignUp);