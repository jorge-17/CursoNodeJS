const mysql = require('mysql2/promise');

// create the connection to database
const pool = mysql.createPool({
    connectionLimit: '10',
    host: 'localhost',
    user: 'jrodarte',
    database: 'training',
    password: 'node',
    port: '4417'
});

module.exports=pool;