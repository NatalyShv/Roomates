var express = require('express');
var app = express();
var path = require('path');
var connect = require('connect');
var serveStatic = require('serve-static');

app.get('/', function(req, res) {
        console.log(__dirname);
    res.sendFile(path.join('roomate/src/index.html'));
});

app.get('/app', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

connect().use(serveStatic('roomate/src')).listen(8080, function(){
    console.log('Server running on 8080...');
});
