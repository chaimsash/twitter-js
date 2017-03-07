const express = require('express');
const nunjucks = require('nunjucks');
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

function Person(name) {
    this.name = name;
}
var people = [new Person('Dopey'), new Person('Sleepy'), new Person('Drowsey')]


var indexData = {
    people: people,
    title: 'The 7 twitter dwarves'
}

//logging middlewear extra credit
// function logger(){
//   [].prototype.slice.call(arguments).forEach(function(x){
//     console.log(x);
//   });
// }


app.get('/**', function(request, response) {
    // Renders and SENDS the Html
    response.render('index', indexData);
});
