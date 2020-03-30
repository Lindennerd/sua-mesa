var mongoose = require('mongoose');

var dishSchema = new mongoose.Schema({
    name: String,
    price: mongoose.Decimal128,
    category: String,
    tags: Array
});

module.exports = mongoose.model('Dish', dishSchema);