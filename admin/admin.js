const asyncHandler = require('express-async-handler');


const database = require("../database");
const queryBuilder = require('../database/query-builder');


const dbConnection = database().getConnection();

let adminApi = async (req, res) => {
    let params = req.body;

    let email = params.Email;
    let firstName = params.FirstName;
    let lastName = params.LastName;
    let number = params.Number;

    if (!email || !firstName || !lastName || !number) {
        res.status(400).json({
            message: 'missing required fields',
            status: 400,
        });
    } else {
        const obj = {

            FirstName: firstName,
            LastName: lastName,
            Email: email,
            Number: number
        }

        let data = queryBuilder.buildInsertQuery('admin', obj);

        try {
            const [results, fields] = await dbConnection.execute(data.query, data.fields);
            res.json({
                message: 'registration complete',
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

let initAdminApi = (app) => {
    app.post('/admin', asyncHandler(adminApi));
}

module.exports = initAdminApi;