const express = require('express');
const path = require('path');
const tweetBank = require('../public/tweetBank.js')
const router = express.Router();
const bodyParser = require('body-parser');

function Person(name) {
    this.name = name;
}

/* A router instance i similar to an app and has get, post, delete etc. Router can't do anything on its own.
becomes the middleware for our app. app.use('/', routes) in app.js */

// router.use('/static', express.static(__dirname + '/public'));

router.use(bodyParser.urlencoded({
    extended: false
}));
router.use(bodyParser.json());

router.get('/', function(req, res, next) {
    res.render('index', {
        tweets: tweetBank.list(),
        showForm: true
    });
});

router.get('/users/:name', function(req, res, next) {
    var name = req.params.name;
    var list = tweetBank.find({
        name: name
    });
    res.render('index', {
        tweets: list,
        showForm: true,
        name: name
    });
});

router.get('/tweets/:id', function(req, res, next) {
    var id = Number(req.params.id);
    var list = tweetBank.find({
        id: id
    });
    res.render('index', {
        tweets: list
    });
});

router.post('/tweets', function(req, res, next) {
    var name = req.body.name;
    var text = req.body.text;
    tweetBank.add(name, text);
    res.redirect('/');
});




module.exports = router;
