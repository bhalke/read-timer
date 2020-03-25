const express = require('express');
const app = new express();
app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html'); //response.sendFile('index.html')

    ;})

    app.get('/css/style.css', function(req, res) { 
        res.sendFile(__dirname + '/css/style.css');
    });
    app.get('/main.js', function(req, res) {
        res.sendFile(__dirname + '/main.js');
    });
    app.get('/read.js', function(req, res) {
        res.sendFile(__dirname + '/read.js');
    });
    app.get('/reader-service.js', function(req, res) {
        res.sendFile(__dirname + '/reader-service.js');
    });
    app.get('/text.txt', function(req, res) {
        res.sendFile(__dirname + '/text.txt');
    });
    app.listen(3000);