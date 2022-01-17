let billing = require('./billing-address');


let initBillingAddressModule = (app) => {
    billing(app);
}

module.exports = (app) => {
    initBillingAddressModule(app);
}