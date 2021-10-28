
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'medicine-shop'
});

let getConnection = () => {
    return connection.promise();
}

module.exports = () => {
    return {
        getConnection: getConnection
    }
}