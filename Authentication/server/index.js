'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const http = require('http');
const router = require('./router');
const cors = require('cors');
const app = express();

//db setup
require('mongoose').connect('mongodb://localhost/react-redux-auth');



//app setup
app.use(morgan('combined'));
app.use(cors()); //middleware for cors allowing requests from the client
app.use(bodyParser.json());
router(app);



//server setup
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(PORT, () => {
    console.log('Construction ongoing . . .');
});