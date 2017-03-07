const express = require('express');
const path = require('path');
const tweetBank = require('../public/tweetBank.js')
const router = express.Router();
const bodyParser = require('body-parser');

function Person(name) {
    this.name = name;
}

// router.use('/static', express.static(__dirname + '/public'));
router.use(express.static(__dirname + '/../public'));
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


router.get('/', function (req, res) {
  res.render('index', {tweets: tweetBank.list(), showForm: true});
});

router.get('/users/:name', function (req, res) {
  var name = req.params.name;
  var list = tweetBank.find( { name : name });
  res.render( 'index', { tweets : list, showForm: true, name: name });
});

router.get('/tweets/:id', function (req, res) {
  var id = Number(req.params.id);
  var list = tweetBank.find( { id : id });
  res.render( 'index', { tweets : list });
});

router.post('/tweets', function (req, res) {
  var name = req.body.name;
  var text = req.body.text;
  //refactor to no take in an id argument
  tweetBank.add(name, text);
  res.redirect('/');
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
