var express = require('express');
var app = express();
var path = require('path');
var connect = require('connect');
var serveStatic = require('serve-static');

    console.log('V1');


app.get('/', function(req, res) {
        console.log(__dirname);
    res.sendFile(path.join('roomate/src/app/app.component.html'));
});

app.get('/app', function(req, res) {
    res.sendFile(path.join('roomate/src/app/app.component.html'));
});

app.use('/roomates', express.static('roomate/'));
