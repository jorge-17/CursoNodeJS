const mongoose = require('mongoose');

/*
host: localhost
port: 27017
user: training
password: node
auth: Users
bd: Users
*/

const url = `mongodb://localhost:27017/Users`;
const db = mongoose.createConnection(url, {
    auth: 'Users',
    user: 'training',
    pass: 'node'
});

module.exports = db;