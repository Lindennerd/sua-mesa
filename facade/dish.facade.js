var dishController = require('../controllers/dish.controller');

module.exports = (function() {
    return {
        getAll: function() {
            return dishController.getAll().then(function(dishes) {
                var tags = [];

                for(var index in dishes) {
                    tags = tags.concat(dishes[index].tags);
                }

                return {
                    dishes: dishes,
                    categories: [...new Set(dishes.map(dish => dish.category))],
                    tags: [...new Set(tags.map(tag => tag))]
                };
            })
            .catch(function(err) { throw err; });
        },

        getById: function(id) {
            return dishController.getById(id).then(function(dish){
                return dish;
            })
            .catch(function(err) { throw err; });
        },

        create: function(dish){
            dish.tags = dish.tags.split(';');
            return dishController.create(dish);
        },

        update: function(dish) {
            return dishController.update(dish);
        },

        delete: function(dishId) {
            return dishController.delete(dishId);
        }
    }
})();
