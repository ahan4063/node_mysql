var Routes = require('express').Router();

Routes.get(['/', '/index', '/home'], function(req, res) {
    res.render('index', { title: 'Home' });
});

module.exports = Routes;