var express = require('express');
var router = express.Router();

/* GET 'about' page. */
const about = (req, res) => {
    res.render('generic-text', {
        title: 'About Unverpackt',
        content: 'Das ist eine App<br><br>Inspired by Getting MEAN'
    });
}

module.exports = {
    about
};