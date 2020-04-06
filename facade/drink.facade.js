var drinkController = require('../controllers/drink.controller');

module.exports = (function() {
    return {
        getAll: function() {
            return drinkController.getAll().then(function(drinks) {
                var tags = [];

                for(var index in drinks) {
                    tags = tags.concat(drinks[index].tags);
                }

                return {
                    drinkes: drinks,
                    categories: [...new Set(drinks.map(drink => drink.category))],
                    tags: [...new Set(tags.map(tag => tag))]
                };
            })
            .catch(function(err) { throw err; });
        },

        getById: function(id) {
            return drinkController.getById(id).then(function(drink){
                return drink;
            })
            .catch(function(err) { throw err; });
        },

        create: function(drink){
            drink.tags = drink.tags.split(';');
            return drinkController.create(drink);
        },

        update: function(drink) {
            return drinkController.update(drink);
        },

        delete: function(drink) {
            return drinkController.delete(drink);
        }
    }
})();
