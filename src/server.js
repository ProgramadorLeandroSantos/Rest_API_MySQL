//imports
const express = require('express');
const server = express();
const PORT = 3001;
const cors = require('cors');
const router = require('./routes/index');
const connection = require('../databases/config/connection');
const bodyParser = require('body-parser');

//athentication at databases
connection.authenticate()
    .then(()=>{console.log('Connected on databases')})
    .catch(()=>{console.log('Error at connection with databases')});

//cors config as middleware
server.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    server.use(cors());
    next();
});

//usages
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use(router);
server.listen(PORT,()=>{console.log(`API Running on port: ${PORT}`)});