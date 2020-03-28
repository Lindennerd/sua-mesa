var express = require('express');
var dishController = require('../controllers/dish.controller');

var router = express.Router();

router.get('/', async function(req, res, next) {
    req.param && req.param.id
        ? dishController.getById(req.param.id)
            .then(function(dish) {
                res.format({
                    'text/html': function() { res.render('dish', dish); },
                    'application/json': function() { res.send(dish); }
                });
            })
            .catch(function(err) { throw err; })
        : dishController.getAll()
            .then(function(dishes) {
                res.format({
                    'text/html': function() { res.render('dish', {dishes: dishes}); },
                    'application/json': function() { res.send(dishes); }
                });
            })
            .catch(function(err) { throw err; });
});

router.post('/', function(req, res, next) {
    if(!req.body) res.status(401);
    else {
        dishController.create(req.body)
            .then(function(dish) {
                res.format({
                    'text/html': function() { res.render('dish', dish); },
                    'application/json': function() { res.send(dish); }
                });
            });
    }
});

module.exports = router;