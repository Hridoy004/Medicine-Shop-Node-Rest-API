let check = require('./checkout');


let initCheckModule = (app) => {
    check(app);
}

module.exports = (app) => {
    initCheckModule(app);
}