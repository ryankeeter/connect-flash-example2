'use strict';


var IndexModel = require('../models/index');


module.exports = function (app) {

    var model = new IndexModel();


    app.get('/', function (req, res) {

        res.render('index', model);

    });

    app.get('/errorMessage', function (req, res) {
        req.flash('error', 'this is an error message');
        res.redirect('/');
    });

    app.get('/infoMessage', function (req, res) {
        req.flash('info', 'this is an info message');
        res.redirect('/');
    });

};
