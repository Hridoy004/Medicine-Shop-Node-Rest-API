const adminDetailsApi = require('./admin-panel');

let initUserAccessManagementModule = (app) => {
    adminDetailsApi(app);
}

module.exports = (app) => {
    initUserAccessManagementModule(app);
}