let product = require('./products');

let initProductModule = (app) => {
    product(app);
}

module.exports = (app) => {
    initProductModule(app);
}