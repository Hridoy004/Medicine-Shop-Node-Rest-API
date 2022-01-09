const cors = require('./cors');
const parser = require('./parser');
const authentication = require('../authentication');
const {auth} = ("mysql/lib/protocol/Auth");

let initMiddleWaresModel = (app) => {
    cors(app);
    parser(app);
    authentication(app);;

}

module.exports = (app) => {
    initMiddleWaresModel(app);
}