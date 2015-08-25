var express = require('express');
var router = express.Router();
var puppies = [{name: "skidder", age: 12}, {name: "emma", age: 4}, {name: "beans", age: 1}];


router.get('/', function(req, res, next) {
  res.json(puppies);
});

router.post('/', function(req, res, next) {
  var pup = {name: req.body.name, age: req.body.age};
  puppies.push(pup);
  console.log(puppies);
  res.json(puppies);
});

router.put('/puppies/:id', function(req, res, next) {
  puppies[req.params.id - 1].name = req.body.name;
  puppies[req.params.id - 1].age = req.body.age;
  console.log(puppies);
  res.json(puppies[req.params.id - 1]);
});

router.get('/puppies/:id', function(req, res, next) {
  console.log([req.params]);
  res.json(puppies[req.params.id - 1]);
});

router.delete('/puppies/:id', function(req, res, next) {
  puppies.splice((req.params.id - 1), 1);
  res.json(puppies);
});

router.get('/new', function(req, res, next) {
  res.render('form');
});



module.exports = router;
