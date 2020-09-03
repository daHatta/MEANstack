var express = require('express');
var router = express.Router();

/* GET 'shops-list' page. */
const shopslist = (req, res) => {
    res.render('shops-list', { title: 'List of Shops' });
}

/* GET 'shop-info' page. */
const shop = (req, res) => {
    res.render('shop-info', { title: 'Shop Infos' });
}

/* GET 'shop-review-form' page. */
const addReview = (req, res) => {
    res.render('shop-review-form', { title: 'Add Review' });
}

module.exports = {
    shopslist,
    shop,
    addReview
};