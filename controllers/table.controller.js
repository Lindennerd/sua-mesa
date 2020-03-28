var tableModel = require('../repository/models/table.model');
var genericController = require('./generic.controller');

var controller = genericController(tableModel);
module.exports = controller;