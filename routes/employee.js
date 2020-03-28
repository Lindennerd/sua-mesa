var express = require('express');
var employeeController = require('../controllers/employee.controller');

var router = express.Router();

router.get('/', async function(req, res, next) {
    req.param && req.param.id
        ? employeeController.getById(req.param.id)
            .then(function(employee) {
                res.format({
                    'text/html': function() { res.render('employee', employee); },
                    'application/json': function() { res.send(employee); }
                });
            })
            .catch(function(err) { throw err; })
        : employeeController.getAll()
            .then(function(employees) {
                res.format({
                    'text/html': function() { res.render('employee', {employees: employees}); },
                    'application/json': function() { res.send(employees); }
                });
            })
            .catch(function(err) { throw err; });
});

router.post('/', function(req, res, next) {
    if(!req.body) res.status(401);
    else {
        employeeController.create(req.body)
            .then(function(employee) {
                res.format({
                    'text/html': function() { res.render('employee', employee); },
                    'application/json': function() { res.send(employee); }
                });
            });
    }
});

module.exports = router;