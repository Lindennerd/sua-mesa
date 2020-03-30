var express = require('express');
var dishFacade = require('../facade/dish.facade');

var router = express.Router();

router.get('/', async function(req, res, next) {
    req.param && req.param.id
        ? dishFacade.getById(req.param.id)
            .then(function(dish) {
                res.format({
                    'text/html': function() { res.render('dish', dish); },
                    'application/json': function() { res.send(dish); }
                });
            })
            .catch(function(err) { throw err; })
        : dishFacade.getAll()
            .then(function(items) {
                res.format({
                    'text/html': function() { res.render('dish', items); },
                    'application/json': function() { res.send(items); }
                });
            })
            .catch(function(err) { throw err; });
});

router.post('/', function(req, res, next) {
    if(!req.body) res.status(401);
    else {6
        dishFacade.create(req.body)
            .then(function(dish) {
                res.redirect('/dish');
            });
    }
});

module.exports = router;