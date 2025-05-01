// api/index.js
const app = require('../app/server');

module.exports = (req, res) => {
    app(req, res);
};
