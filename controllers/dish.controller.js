var dishModel = require('../repository/models/dish.model');

module.exports = (function() {
    return {
        getAll: function () {
            return dishModel.find({}, function(err, dishes){
                if(err) throw err;

                return dishes;
            });
        },

        getById: function(id) {
            return dishModel.findById(id, function(err, dish){
                if(err) throw err;
                return dish;
            })
        },

        create: async function(dish) {
            return dishModel.create(dish)
                .then(function(result){ return result; })
                .catch(function(err) {throw err; });
        }
    }

})();