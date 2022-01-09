const adminDetailsApi = require('./adminpanel');

let initUserAccessManagementModule = (app) => {
    adminDetailsApi(app);
}

module.exports = (app) => {
    initUserAccessManagementModule(app);
}