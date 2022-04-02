const mysql = require('mysql')
const dbConstants = require('../ProjectsConstants')
// Database connection
const db = mysql.createConnection({
    host: dbConstants.host,
    user: dbConstants.user,
    password: dbConstants.password,
    database: dbConstants.database
})

db.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
})

module.exports = db;
