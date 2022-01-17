const usersDetailsApi = require('./users');

let initUserAccessManagementModule = (app) => {
    usersDetailsApi(app);
}

module.exports = (app) => {
    initUserAccessManagementModule(app);
}