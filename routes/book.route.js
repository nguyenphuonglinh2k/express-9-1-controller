const express = require('express');
const shortid = require('shortid');
var db = require('../db');

var router = express.Router();

router.get('/', function(req, res) {
  res.render('book', {
    books: db.get('books').value()
  });
});

router.get('/add', function(req, res) {
  res.render('add');
});

router.get('/:id/delete', function(req, res) {
  var id = req.params.id;
  var item = db.get('books').find({ id: id }).value();
  var index = db.get('books').indexOf(item).value();
  
  db.get('books').splice(index, 1).write();
  
  res.redirect('back');
});

router.get('/:id/update', function(req, res) {
  var id = req.params.id;
  res.render('update', {
    id: id
  });
});

router.post('/add', function(req, res) {
  var id = shortid.generate();
  var title = req.body.title;
  var des = req.body.description;
  db.get('books').push({ 
    id: id, 
    title: title,
    description: des
  }).write();
  
  res.redirect('/books');
});

router.post('/:id/update', function(req, res) {
  var id = req.params.id;
  var title = req.body.newTitle;
  db.get('books').find({ id: id }).value().title = title;
  
  res.redirect('/books');
});

module.exports = router;