'use strict';

const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jwt-simple');
const config = require('../config');

function tokenForUser(user) { //create a token using user's id
    const timestamp = new Date().getTime();
    //sub - subject
    //iat - issued at time
    return jwt.encode({ sub: user._id, iat: timestamp }, config.secret);
}


exports.signup = (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) { //check request data 
        return res.status(422).send({ error: "You must provide email and password" });
    }
    
    User.findOne({ email }, (err, user) => {
        if (err) { return next(err); }

        if (user) {
            return res.status(422).send({ error: 'Email is in use'});
        }
        
        new User({ //create user
            email,
            password: bcrypt.hashSync(password, 10) //hash password
        }).save((err, user) => { //save user
            if (err) { return next(err); }

            res.json({ token: tokenForUser(user) }); 
        });
    });
}