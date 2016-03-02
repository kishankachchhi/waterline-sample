// FILE: models/user.js
var Waterline = require('waterline');

module.exports = Waterline.Collection.extend({
    // tableName corresponds to database table name
    tableName: 'profile',

    // connection name corresponds to the connection we define in configs/connection.js
    connection: 'mysqlLocalhost',

    attributes: {
        user:{
            model:'user',
            columnName:'id'
        },
        firstName: {
            type: 'string'
        },
        lastName: {
            type: 'string'
        },
        country:{
            model: 'country'
        },
        phone: {
            type: 'string', // automatically got email validation
            required: true // required attribute
        },
        age: {
            type: 'integer',
            min: 18
        },


        // instance methods can be put here
        temporaryFunction: function() {
            // doing some stuff here
        }
    }
});