var express = require('express');
var drinkFacade = require('../facade/drink.facade');

var router = express.Router();

router.get('/', async function(req, res, next) {
    req.param && req.param.id
        ? drinkFacade.getById(req.param.id)
            .then(function(drink) {
                res.format({
                    'text/html': function() { res.render('drink', drink); },
                    'application/json': function() { res.send(drink); }
                });
            })
            .catch(function(err) { throw err; })
        : drinkFacade.getAll()
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
        drinkFacade.create(req.body)
            .then(function(drink) {
                res.format({
                    'text/html': function() { res.render('drink', drink); },
                    'application/json': function() { res.send(drink); }
                });
            });
    }
});

module.exports = router;