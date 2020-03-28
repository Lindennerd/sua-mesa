var mongoose = require('mongoose');

var drinkSchema = new mongoose.Schema({
    name: String,
    price: mongoose.Decimal128,
    category: String,
    tags: String
});

module.exports = mongoose.model('Drink', drinkSchema);