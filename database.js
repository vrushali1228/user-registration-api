var mongoose = require('mongoose');
var chalk = require('chalk');
var development = require('./development')

var connected = chalk.bold.cyan;
var error = chalk.bold.yellow;
var disconnected = chalk.bold.red;
var termination = chalk.bold.magenta;

mongoose.connect(development.DB,{
    useNewUrlParser: true,
    useCreateIndex: true,
});

mongoose.connection.on('connected', function(){
    console.log(connected("Mongoose default connection is open to ", development.DB));
});

mongoose.connection.on('error', function(err){
    console.log(error("Mongoose default connection has occured "+err+" error"));
});

mongoose.connection.on('disconnected', function(){
    console.log(disconnected("Mongoose default connection is disconnected"));
});

process.on('SIGINT', function(){
    mongoose.connection.close(function(){
        console.log(termination("Mongoose default connection is disconnected due to application termination"));
        process.exit(0)
    });
});
