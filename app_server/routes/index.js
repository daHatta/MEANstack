const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');
const ctrlShops = require('../controllers/shops');
const ctrlAbout = require('../controllers/about');

/* Home page */
router.get('/', ctrlMain.index);

/* Shop pages */
router.get('/shopslist', ctrlShops.shopslist);
router.get('/shopslist/shop', ctrlShops.shop);
router.get('/shopslist/shop/review/new', ctrlShops.addReview);

/* About page */
router.get('/about', ctrlAbout.about);

module.exports = router;