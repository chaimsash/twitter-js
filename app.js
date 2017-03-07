const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const path = require('path');
const app = express(); // creates an instance of an express application
const bodyParser = require('body-parser');

// Nunjucks configure
nunjucks.configure('views', {
    autoescape: true,
    express: app,
    noCache: true
});

//logging middlewear extra credit
function logger() {
    Array.prototype.slice.call(arguments).forEach(function(x) {
        console.log(x);
    });
}


app.use(express.static(path.join(__dirname, '/public')));
// Imports router from index.js as middleware!
app.use('/', routes);
// WTF?
// TYING FILE EXTENSION TO THE RENDERING ENGINE
app.set('view engine', 'html');
app.engine(
    'html', nunjucks.render
);


app.use(function(req, res, next) {
    res.on('finish', function() {
        logger(req.method + ' / ' + res.statusCode + ' ' + req.url);
    });
    next();
});



app.listen(3000, function() {
    logger('server listening');
});
