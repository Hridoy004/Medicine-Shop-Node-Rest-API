let contact = require('./contact');
const contactInfo = require('./contact-info');

let initContactModule = (app) => {
    contact(app);
    contactInfo(app);

}
module.exports = (app) => {
    initContactModule(app);
}