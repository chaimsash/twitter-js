const express = require('express');
const path = require('path');
const tweetBank = require('../public/tweetBank.js')
const router = express.Router();

function Person(name) {
    this.name = name;
}

router.use(express.static(__dirname + '/../public'));

router.get('/', function (req, res) {
  res.render('index.html', {tweets: tweetBank.list()});
});

// router.get('/public/tweetbank.js', function (req, res) {
//   res.sendFile(path.resolve('public/tweetbank.js'));
// });
//
// router.get('/public/stylesheets/style.css', function (req, res) {
//   res.sendFile(path.resolve('public/stylesheets/style.css'));
// });



// router.get('/**', function(req, res) {
//     // Renders and SENDS the Html
//     res.render('index', indexData);
// });

module.exports = router;
