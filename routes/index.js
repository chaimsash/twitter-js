const express = require('express');
const router = express.Router();

function Person(name) {
    this.name = name;
}
var people = [new Person('Dopey'), new Person('Sleepy'), new Person('Drowsey')];


var indexData = {
    people: people,
    title: 'The 7 twitter dwarves'
};

router.get('/**', function(req, res) {
    // Renders and SENDS the Html
    res.render('index', indexData);
});

module.exports = router;
