var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var poster = require('http-poster');
var fs = require('fs');
var http=require('http');
// var routes = require('./routes/index');
// var users = require('./routes/users');

var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
request

// app.use('/', routes);
// app.use('/users', users);
//http://r.qidian.com/
app.get('/re', function(req, res) {
	var html=""
    poster.get('https://www.baidu.com', function(err, result, data) {
        // console.log(err);
        // console.log(result);
        html+=data;
        console.log("=============================================================================================");
        console.log("数据开头===========================================================================================");
        console.log(data+"回来的数据完整吗");
        console.log("数据结尾==========================================================================================");
        console.log("=============================================================================================");
        fs.writeFile('./message.txt', data, function(err) {
            if (err) throw err;
            console.log('It\'s saved!');
        });
        res.end(html+"回来的数据完整吗?")
    });
   /* https.get('https://www.baidu.com', function(res) {
      console.log("Got response: " + res.statusCode);
      // res.end("saaasasassa")
    }).on('error', function(e) {
      console.log("Got error: " + e.message);
    });*/

})
module.exports = app;
