const express = require('express');

const authenticationModule = require('./authentication');
const checkout = require('./checkout')
const welcomeModule = require('./welcome');
const productModule = require('./products');
const adminModule = require('./admin');
const contactModule = require('./contact');
const uamModule = require('./uam');
const adminPanelModule = require('./adminpanel');
const middleWares = require('./middlewares');

const app = express();
const port = 3000;

// initializing middlewares
middleWares(app);

// initiating authentication model
authenticationModule(app);

// initiating welcome module
welcomeModule(app);

// initiating products
productModule(app);

// initiating welcome module
uamModule(app);

// initiating checkout
checkout(app);

// initiating admin
adminModule(app);

// initiating contact
contactModule(app);

adminPanelModule(app);

app.listen(port, () => {
    console.log('Server is running at port: ', port);
})
