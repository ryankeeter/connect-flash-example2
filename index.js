'use strict';


var kraken = require('kraken-js'),
    flash = require('connect-flash'),
    app = {};


app.configure = function configure(nconf, next) {
    // Async method run on startup.
    next(null);
};


app.requestStart = function requestStart(server) {
    // Run before most express middleware has been registered.
    server.use(flash());
};


app.requestBeforeRoute = function requestBeforeRoute(server) {
    // Run before any routes have been added.
    server.use(function (req, res, next) {
        res.locals.flash = req.flash();
        next();
    });
};


app.requestAfterRoute = function requestAfterRoute(server) {
    // Run after all routes have been added.
};


if (require.main === module) {
    kraken.create(app).listen(function (err) {
        if (err) {
            console.error(err.stack);
        }
    });
}


module.exports = app;
