var express = require('express');
var path = require('path');
var logger = require('morgan');
var fs = require('fs');
var request = require('request');
// var routes = require('./routes/index');
// var users = require('./routes/users');
var app = express();
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
// app.use('/', routes);
// app.use('/users', users);
//http://r.qidian.com/
app.get('/re', function(req, res) {
    request('https://www.baidu.com', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(typeof body) // Show the HTML for the homepage. 
            fs.writeFile('./testMessage.md', body, function(err) {
                if (err) throw err;
                console.log('It\'s saved!');
            });
            console.log(response)
            res.end(body)
        }
    })
})

module.exports = app;
