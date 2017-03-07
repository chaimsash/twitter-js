const _ = require('lodash');

var data = [];

function add (name, content) {
  data.push({name: name, content: content });
}

// .cloneDeep recursively clones a value and returns a shallow (new) copy
function list () {
  return _.cloneDeep(data);
}


function find(properties) {
  return _.cloneDeep(_.filter(data, properties));
}

// Utility function for getting an array element via index
const randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

// Returns fake combo name
const getFakeName = function() {
  const fakeFirsts = ['Doc', 'Dopey', 'Bashful', 'Grumpy', 'Sneezy', 'Sleepy', 'Happy', 'Snow', 'Ashi', 'Kate', 'Omri', 'Gabriel', 'Joe', 'Geoff'];
  const fakeLasts = ['White', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

// Generate a random tweet from adjectives
const getFakeTweet = function() {
  const awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
  return "Hi ho, hi ho, its " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

module.exports = { add: add, list: list, find: find };

// On add property of exports, we add ten fake tweets. When add is invoked, we get ten fake tweet objects
for (let i = 0; i < 10; i++) {
  module.exports.add( getFakeName(), getFakeTweet() );
}
