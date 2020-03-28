var drinkModel = require('../repository/models/drink.model');
var genericController = require('./generic.controller');

var controller = genericController(drinkModel);
module.exports = controller;