const express = require('express');
const path = require('path');
const router = express.Router();

function Person(name) {
    this.name = name;
}
var people = [new Person('Dopey'), new Person('Sleepy'), new Person('Drowsey')];

var indexData = {
    people: people,
    title: 'The 7 twitter dwarves'
};

express.static(path.resolve('public'));

// router.use(express.static('public'));
router.get('/', function (req, res) {
  res.render('index.html');
});

router.get('/public/tweetbank.js', function (req, res) {
  res.sendFile(path.resolve('public/tweetbank.js'));
});

// router.get('/**', function(req, res) {
//     // Renders and SENDS the Html
//     res.render('index', indexData);
// });

module.exports = router;
