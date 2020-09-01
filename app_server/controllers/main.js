/* GET home page. */
const index = (req, res) => {
    res.render('index', { title: 'ExprHelloess' });
}

module.exports = {
    index
};