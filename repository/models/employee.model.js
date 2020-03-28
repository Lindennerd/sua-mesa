var mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    name: String,
    function: String
});

module.exports = mongoose.model('Employee', employeeSchema);