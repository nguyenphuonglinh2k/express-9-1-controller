const express = require('express');
var db = require('../db');
const shortid = require('shortid');

var router = express.Router();

router.get('/', function(req, res) {
  res.render('users/index', {
    users: db.get('users').value()
  });
});

router.get('/add', function(req, res) {
  res.render('users/add');
});

router.get('/:id/delete', function(req, res) {
  var id = req.params.id;
  var item = db.get('users').find({ id: id }).value();
  var index = db.get('users').indexOf(item).value();
  
  db.get('users').splice(index, 1).write();
  
  res.redirect('back');
});

router.get('/users/:id/update', function(req, res) {
  var id = req.params.id;
  res.render('users/update', {
    id: id
  });
});

router.post('/:id/update', function(req, res) {
  var id = req.params.id;
  var name = req.body.newName;
  db.get('users').find({ id: id }).value().name = name;
  
  res.redirect('/users');
});

router.post('/add', function(req, res) {
  var id = shortid.generate();
  var name = req.body.name;
  
  db.get('users').push({ 
    id: id, 
    name: name
  }).write();
  
  res.redirect('/users');
});

module.exports = router;