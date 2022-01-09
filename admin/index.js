let admin = require('./admin');

let initAdminModule = (app) => {
    admin(app);

}
module.exports = (app) => {
    initAdminModule(app);
}