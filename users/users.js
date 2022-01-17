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


let getLoggedInUserDataApi = async (req, res) => {

    let qr = `select * from users`;
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

let initUserDetailsApi = (app) => {
    app.get('/users', asyncHandler(getLoggedInUserDataApi));

}

module.exports = initUserDetailsApi;





