const {Schema} = require('mongoose');
const mongo = require('./bds');

const schema = new Schema(
    {
        name: 'string',
        email: 'string',
        age: 'number',
        phone: 'string'
    }
);
const Users = mongo.model('Users', schema);

module.exports=Users;