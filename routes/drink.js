var express = require('express');
var drinkController = require('../controllers/drink.controller');

var router = express.Router();

router.get('/', async function(req, res, next) {
    req.param && req.param.id
        ? drinkController.getById(req.param.id)
            .then(function(drink) {
                res.format({
                    'text/html': function() { res.render('drink', drink); },
                    'application/json': function() { res.send(drink); }
                });
            })
            .catch(function(err) { throw err; })
        : drinkController.getAll()
            .then(function(drinks) {
                res.format({
                    'text/html': function() { res.render('drink', {drinks: drinks}); },
                    'application/json': function() { res.send(drinks); }
                });
            })
            .catch(function(err) { throw err; });
});

router.post('/', function(req, res, next) {
    if(!req.body) res.status(401);
    else {
        drinkController.create(req.body)
            .then(function(drink) {
                res.format({
                    'text/html': function() { res.render('drink', drink); },
                    'application/json': function() { res.send(drink); }
                });
            });
    }
});

module.exports = router;