var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

const Views = '../views/';

router.get('/about', (req, res) => {
    res.render(
        Views + '/content/about.ejs');
});

router.get('/business', (req, res) => {
    res.render(
        Views + '/content/business.ejs');
});

router.get('/news', (req, res) => {
    res.render(
        Views + '/content/news.ejs');
});

router.get('/contact', (req, res) => {
    res.render(
        Views + '/content/contact.ejs');
});

router.get('/users', userController.doGetUser);

module.exports = router;