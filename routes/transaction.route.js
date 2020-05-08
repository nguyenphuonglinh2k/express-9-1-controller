const express = require('express');
var db = require('../db');

var router = express.Router();

router.get('/', function(req, res) {
  res.render('transaction/index', {
    transactions: db.get('transactions').value()
  });
});

module.exports = router;