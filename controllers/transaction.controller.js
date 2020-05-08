var db = require('../db');

module.exports.index = function(req, res) {
  res.render('transaction/index', {
    transactions: db.get('transactions').value()
  });
};

module.exports.create = function(req, res) {
  res.render('transaction/create');
};