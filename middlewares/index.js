const cors = require('./cors');
const parser = require('./parser');

let initMiddleWaresModel = (app) => {
    cors(app);
    parser(app);
}

module.exports = (app) => {
    initMiddleWaresModel(app);
}