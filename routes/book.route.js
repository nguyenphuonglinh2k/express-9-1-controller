const express = require('express');
var bookController = require('../controllers/book.controller.js');
var router = express.Router();

router.get('/', bookController.index);

router.get('/add', bookController.add);

router.get('/:id/delete', bookController.delete);

router.get('/:id/update', bookController.update);

router.post('/add', bookController.postAdd);

router.post('/:id/update', bookController.postUpdate);

module.exports = router;