// FILE: models/user.js
var Waterline = require('waterline');
var helper = require('./../bin/helper');

module.exports = Waterline.Collection.extend({
    // tableName corresponds to database table name
    tableName: 'user',

    // connection name corresponds to the connection we define in configs/connection.js
    connection: 'mysqlLocalhost',

    attributes: {
        userName: {
            type: 'string'
        },
        email: {
            type: 'email', // automatically got email validation
            required: true // required attribute
        },
        email_confirmation: {
            type: 'boolean',
            defaultsTo: 0
        },
        password: {
            type: 'string',
            required: true,
            minLength: 6
        },
        active: {
            type: 'boolean',
            defaultsTo: 0
        },
        activation_date: {
            type: 'datetime'
        },
        // instance methods can be put here
        temporaryFunction: function () {
            // doing some stuff here
        },
        beforeCreate: function (values, next) {
            var hash = helper.stringToMD5(values.password);
            values.password = hash;
            next();
        }
    }
});