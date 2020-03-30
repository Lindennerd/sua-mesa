var express = require('express');
var tableController = require('../controllers/table.controller');

var router = express.Router();

router.get('/', async function(req, res, next) {
    req.param && req.param.id
        ? tableController.getById(req.param.id)
            .then(function(table) {
                res.format({
                    'text/html': function() { res.render('table', table); },
                    'application/json': function() { res.send(table); }
                });
            })
            .catch(function(err) { throw err; })
        : tableController.getAll()
            .then(function(tables) {
                res.format({
                    'text/html': function() { res.render('table', {tables: tables}); },
                    'application/json': function() { res.send(tables); }
                });
            })
            .catch(function(err) { throw err; });
});

router.post('/', function(req, res, next) {
    if(!req.body) res.status(401);
    else {
        tableController.create(req.body)
            .then(function(table) {
                res.format({
                    'text/html': function() { res.render('table', table); },
                    'application/json': function() { res.send(table); }
                });
            });
    }
});

module.exports = router;