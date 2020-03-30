var drinkController = require('../controllers/drink.controller');

module.exports = (function() {
    return {
        create: function(drink){
            drink.tags = drink.tags.split(';');
            return drinkController.create(drink);
        },

        getAll: function() {
            return drinkController.getAll().then(function(drinkes) {
                var tags = [];

                for(var index in dishes) {
                    tags = tags.concat(dishes[index].tags);
                }

                return {
                    drinkes: drinkes,
                    categories: [...new Set(drinkes.map(drink => drink.category))],
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
        }
    }
})();
