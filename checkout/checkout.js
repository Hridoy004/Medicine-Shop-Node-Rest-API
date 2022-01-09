const asyncHandler = require('express-async-handler')

const database = require("../database");
const queryBuilder = require('../database/query-builder');

const dbConnection = database().getConnection();


let checkoutApi = async (req, res) => {
    let params = req.body;

    let email = params.Email;
    let firstName = params.FirstName;
    let address = params.Address;
    let state = params.State;
    let city = params.City;
    let phoneNumber = params.PhoneNumber;


    if (!email || !firstName || !address || !phoneNumber || !city || !state) {
        res.status(400).json({
            message: 'missing required fields',
            status: 400,
        });
    } else {

        const saltRounds = 10;

        const objf = {
            FirstName: firstName,
            Email: email,
            Address: address,
            City: city,
            State: state,
            PhoneNumber: phoneNumber
        }

        let data = queryBuilder.buildInsertQuery('home_address', objf);
        console.log(data);

        try {
            const [results, fields] = await dbConnection.execute(data.query, data.fields);

            let userId = results.insertId;
            res.json({
                message: 'successful',
                status: 200
            })

        } catch (e) {
            res.status(400).json({
                message: e.message,
                status: 400,
            });
        }

    }
}

let initCheckApi = (app) => {
    app.post('/check', asyncHandler(checkoutApi));
}

module.exports = initCheckApi;