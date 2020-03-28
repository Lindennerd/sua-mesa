var employeeModel = require('../repository/models/employee.model');
var genericController = require('./generic.controller');

var controller = genericController(employeeModel);
module.exports = controller;