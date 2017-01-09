'use strict';

const passport = require('passport');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

//Create Local Strategy
const localOptions = { usernameField: 'email' }; //set username options as email
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
    User.findOne({ email }, (err, user) => {
        if (err) { return done(err); } //error
        if (!user) { return done(null, false); } //no user
        if (!bcrypt.compareSync(password, user.password)) { return done(null, false); } //wrong password
        return done(null, user); //right password
    });
});


//Setup options for JWT strategy
const jwtOptions = { //setup options for jwt strategy
    //search req header for the jwt
    jwtFromRequest: ExtractJwt.fromHeader('authorization'), 
    //use the secret to see if token is valid
    secretOrKey: config.secret
};

//Create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
    //see if user id in payload exists in database
    User.findById(payload.sub, (err, user) => {
        if (err) { return done(err, false); } //return the error, and false <-- no user found

        if (user) { //user found
            done(null, user);
        } else { //no error, but user not found
            done(null, false);
        }
    });
});

passport.use(jwtLogin);
passport.use(localLogin);