/*var request = require('request');
var qs = require('querystring');
var User = require('../models/user');

var tictailApp = {
      clientId: 'clientid_KXwOIyaQv2AwvBm8SU06cxZrFq09Yv',
      clientSecret: 'clientsecret_jOvbo29NdmEOOP56EvGN8XgLDyfonU5FFOcWQqLU'};
*/      
function getUsers() {
  var userList = [
    {firstName: 'Jack', lastName: 'Jacksson', email: 'jack@usr.it', password: 'secret-password'},
    {firstName: 'Jill', lastName: 'Jacksson', email: 'jill@usr.it', password: 'secret-password'},
    {firstName: 'Joe', lastName: 'Jacksson', email: 'joe@usr.it', password: 'secret-password'},
    {firstName: 'Jenny', lastName: 'Jacksson', email: 'jenny@usr.it', password: 'secret-password'},
  ];
  return userList;
}

function getProducts() {
  var productList = [
    {"id":98895109,"title":"Umbrella Type X","price":3494862},
    {"id":13324309,"title":"Range Rover Toy","price":3187008},
    {"id":25245602,"title":"Perler beads Large","price":1019472},
    {"id":26695639,"title":"Perler beads Medium","price":9784307},
    {"id":57630425,"title":"Perler beads Small","price":7221533},
    {"id":97743607,"title":"Shovel","price":544486}
  ];
  return productList;
}
/*
function authenticate(url, client_id, client_secret, authcode) {

}

function get(url) {
  return request(url, (error, response, body) => {
    if (error) {
      console.error(error);
    }
    return body.json();
  });
}
*/
module.exports = { getUsers, getProducts }
