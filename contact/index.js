let contact = require('./contact');

let initContactModule = (app) => {
    contact(app);

}
module.exports = (app) => {
    initContactModule(app);
}