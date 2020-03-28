module.exports = function(model) {
    return {
        getAll: function () {
            return model.find({}, function(err, items){
                if(err) throw err;

                return items;
            });
        },

        getById: function(id) {
            return model.findById(id, function(err, item){
                if(err) throw err;
                return item;
            })
        },

        create: async function(modelToCreate) {
            return model.create(modelToCreate)
                .then(function(item){ return item; })
                .catch(function(err) {throw err; });
        }
    }

};