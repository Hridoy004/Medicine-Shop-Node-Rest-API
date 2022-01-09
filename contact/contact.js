const asyncHandler = require('express-async-handler')

const database = require("../database");
const queryBuilder = require('../database/query-builder');

const dbConnection = database().getConnection();


let contactApi = async (req, res) => {
    let params = req.body;

    let email = params.Email;
    let firstName = params.Name;
    let phoneNumber = params.PhoneNumber;
    let message = params.Message;


    if (!email || !firstName || !phoneNumber  || !message) {
        res.status(400).json({
            message: 'missing required fields',
            status: 400,
        });
    } else {

        const obj = {
            Name: firstName,
            Email: email,
            PhoneNumber: phoneNumber,
            Message: message
        }

        let data = queryBuilder.buildInsertQuery('contact_information', obj);
        console.log(data);

        try {
            const [results, fields] = await dbConnection.execute(data.query, data.fields);
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

let initContactApi = (app) => {
    app.post('/contact', asyncHandler(contactApi));
}

module.exports = initContactApi;
