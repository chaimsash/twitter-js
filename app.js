const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const app = express(); // creates an instance of an express application

// Nunjucks configure
nunjucks.configure('views', {
    autoescape: true,
    express: app,
    noCache: true
});


// WTF?
// TYING FILE EXTENSION TO THE RENDERING ENGINE
app.set('view engine', 'html');
// app.engine(
//     'html', nunjucks.render
// );

app.listen(3000, function() {
    console.log('server listening');
});

//logging middlewear extra credit
// function logger(){
//   [].prototype.slice.call(arguments).forEach(function(x){
//     console.log(x);
//   });
// }

app.use('/', routes)
