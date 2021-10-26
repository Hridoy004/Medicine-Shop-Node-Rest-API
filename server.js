const express = require('express');

const authenticationModule = require('./authentication');
const welcomeModule = require('./welcome');
const middleWares = require('./middlewares');

const app = express();
const port = 3000;

// initializing middlewares
middleWares(app);

// initiating authentication model
authenticationModule(app);

// initiating welcome module
welcomeModule(app);

app.listen(port, () => {
    console.log('Server is running at port: ', port);
})