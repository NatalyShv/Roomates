var express = require('express');
var app = express();
var path = require('path');
var connect = require('connect');
var serveStatic = require('serve-static');
    
console.log('V1.1');

app.get('/', function(req, res) {
        console.log(__dirname);
    res.sendFile(path.join('roomate/src/app/app.component.html'));
});

console.log('defined defualt');

app.use('/roomates', express.static('roomate/'));


console.log('defined static');
