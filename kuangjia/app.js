var express = require('express');

var path = require('path');

var logger = require('morgan');

var cookieParser = require('cookie-parser');

var bodyParser = require('body-parser');

var session    = require('express-session');
//handlebars模板引擎的支持
var hbs  = require('express3-handlebars');

var index = require('./routes/index');
//通过这个中间件向模板引擎传值
var flash = require('connect-flash');

var request=require('request')

var fs=require('fs')

var $=require('jquery')
var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(flash());

app.engine('.hbs', hbs({
    extname: '.hbs',
    defaultLayout:'main',
    // helpers: {
    //     foo: function () { return 'FOO!'; },
    //     bar: function () { return 'BAR!'; }
    // }

}));

app.set('view engine', '.hbs');

app.use(session({
    secret: 'itcast-third',
    name: 'itcast-third',
    cookie: {maxAge: 800000000000},
    resave: false,//每次请求都重新设置session cookie
    saveUninitialized: true//每次请求都设置个session cookie
}));

var src={
	'home':'http://r.qidian.com/',
	'b':'http://read.qidian.com/chapter/JSSsq8y8oOs1/JY01G_iMVeo1',
	'c':'https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=1&rsv_idx=1&tn=baidu&wd=es6&oq=%E8%A1%8C%E5%B0%B8%E8%B5%B0%E8%82%89%E7%9A%84%E6%84%8F%E6%80%9D&rsv_pq=caaffabf00007504&rsv_t=44f8FYqVJGXG2IjDuf8%2F66qJssY1%2F0u%2BNJFrC4aE%2FhRALLVkgflrJZdCO3k&rqlang=cn&rsv_enter=1&rsv_sug3=8&rsv_sug1=5&rsv_sug7=100&rsv_sug2=0&prefixsug=es&rsp=0&inputT=4707&rsv_sug4=19127'

}

app.get('/re', function(req, res) {
    request(src.b, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(typeof body) // Show the HTML for the homepage. 
            fs.writeFile('./testMessage.html', body, function(err) {
                if (err) throw err;
                console.log('It\'s saved!');
            });
            res.end(body)
        }
    })
})





app.use(function(req, res, next){
    res.locals.user = req.session.user;
    // console.log(res);
    var error = req.flash('error');
    res.locals.error = error.length ? error : null;

    var success = req.flash('success');
    //前台用{{success}}
    res.locals.success = success.length ? success : null;
    next();
});


app.use('/', index);

//app.use('/users', users);


module.exports = app;
