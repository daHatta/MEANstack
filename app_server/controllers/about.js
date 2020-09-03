var express = require('express');
var router = express.Router();

/* GET 'about' page. */
const about = (req, res) => {
    res.render('generic-text', { title: 'About' });
}

module.exports = {
    about
};