// FILE: models/user.js
var Waterline = require('waterline');

module.exports = Waterline.Collection.extend({
    // tableName corresponds to database table name
    tableName: 'country',

    // connection name corresponds to the connection we define in configs/connection.js
    connection: 'pgSqlLocalhost',

    attributes: {
        code: {
            type: 'string',
            unique: true,
            required: true // required attribute
        },
        name: {
            type: 'string', // automatically got email validation
            required: true // required attribute
        },

        // instance methods can be put here
        temporaryFunction: function() {
            // doing some stuff here
        }
    }
});