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
    else {
        dishFacade.create(req.body)
            .then(function(dish) {
                res.redirect('/dish');
            })
            .catch(function(err) {
                res.status(500).render('error', err);
            });
    }
});

router.get('/update/:id', function(req, res, next) {
    if(!req.params || !req.params.id) res.status(401).render('error');
    else {
        dishFacade.getById(req.params.id)
            .then(function(dish){ res.render('dish', dish); })
            .catch(function(error) { res.render('error', error); })
    }
})

router.post('/update', function(req, res, next) {
    if(!req.body) res.status(401);
    else {
        dishFacade.update(req.body)
            .then(dish => res.redirect('/dish'));
    }
});

router.delete('/:id', function(req, res, next) {
    if(!req.params || req.params.id) res.status(401);
    dishFacade.delete(req.params.id)
        .then(resp => res.status(200).send())
        .catch(err => res.status(500).send(err));
});

module.exports = router;