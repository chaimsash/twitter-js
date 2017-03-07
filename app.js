const express = require( 'express' );
const nunjucks = require( 'nunjucks' );

const app = express(); // creates an instance of an express application

app.listen(3000, function(){
  console.log('server listening');
});

nunjucks.configure('views',{
  autoescape: true,
  express: app,
  noCache: true
});
//logging middlewear extra credit
// function logger(){
//   [].prototype.slice.call(arguments).forEach(function(x){
//     console.log(x);
//   });
// }

function Person(name){
  this.name = name;
}

var people = [new Person('Dopey'), new Person('Sleepy'), new Person('Drowsey')]

var indexData = {people: people, title: 'The 7 twitter dwarves'}

var index = nunjucks.render('index.html', indexData);

app.get('/**', function(request, response){
  response.send(index);
});
