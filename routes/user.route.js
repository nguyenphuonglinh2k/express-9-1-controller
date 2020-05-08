const express = require('express');
const low = require('lowdb');
const shortid = require('shortid');
var bodyParser = require('body-parser');

var route = express.Router();

app.get('/', function(req, res) {
  res.render('users/index', {
    users: db.get('users').value()
  });
});

app.get('/add', function(req, res) {
  res.render('users/add');
});

app.get('/:id/delete', function(req, res) {
  var id = req.params.id;
  var item = db.get('users').find({ id: id }).value();
  var index = db.get('users').indexOf(item).value();
  
  db.get('users').splice(index, 1).write();
  
  res.redirect('back');
});

app.get('/users/:id/update', function(req, res) {
  var id = req.params.id;
  res.render('users/update', {
    id: id
  });
});

app.post('/:id/update', function(req, res) {
  var id = req.params.id;
  var name = req.body.newName;
  db.get('users').find({ id: id }).value().name = name;
  
  res.redirect('/users');
});

module.exports = route;