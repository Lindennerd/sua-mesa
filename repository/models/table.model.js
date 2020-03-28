var mongoose = require('mongoose');

var tableSchema = new mongoose.Schema({
    name: String,
    location: String
});

module.exports = mongoose.model('Table', tableSchema);