/* GET home page. */
const index = (req, res) => {
    res.render('index', { title: 'Hello Express' });
}

module.exports = {
    index
};