var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var poster = require('http-poster');
var fs = require('fs');
// var routes = require('./routes/index');
// var users = require('./routes/users');

var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', routes);
// app.use('/users', users);

app.get('/re', function(req, res) {
    poster.get('https://www.baidu.com', function(err, result, data) {
        console.log(err);
        console.log(result);
        console.log(data);
        fs.writeFile('./message.txt', data, function(err) {
            if (err) throw err;
            console.log('It\'s saved!');
        });
        res.end(data)
    });
})
module.exports = app;
