var dishModel = require('../repository/models/dish.model');
var genericController = require('./generic.controller');

var controller = genericController(dishModel);
module.exports = controller;