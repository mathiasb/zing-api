var express = require('express');
var web_api = require('../webapi/api-handler');

var router = express.Router();

router.delete('/users/:userId', function(req, res) {
  web_api.deleteUser(req.params.userId);
  res.redirect('/users');
});

router.get('/users', function(req, res) {
  var userList = web_api.getUsers();
  res.send(userList);
});

router.get('/products', function(req, res) {
  var productList = web_api.getProducts();
  res.send(productList);
});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'My Dashboard' });
});

module.exports = router;
