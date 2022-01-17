const mysql = require('mysql2');
const asyncHandler = require('express-async-handler');


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'medicine-shop'
})

db.connect(err => {
    if(err) {
        console.log(err, 'dberr');
    }

})


let getLoggedInContactInfoDataApi = async (req, res) => {

    let qr = `select * from contact_information`;
    db.query(qr, (err, result) => {
        if(err) {
            console.log(err, 'errs');
        }

        if(result.length>0) {
            res.send({
                message: 'all user data',
                data: result
            });
        }

    });

}

let initContactInfoDetailsApi = (app) => {
    app.get('/contactInfo', asyncHandler(getLoggedInContactInfoDataApi));

}

module.exports = initContactInfoDetailsApi;





