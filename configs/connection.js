var mysqlAdapter = require('sails-mysql');
var myDiskAdapter = require('sails-disk');
var pgSqlAdapter = require('sails-postgresql');
module.exports = {

    // setup adapters for each type of database
    adapters: {
        'default': mysqlAdapter,
        disk: myDiskAdapter,
        mysql: mysqlAdapter,
        pgSql: pgSqlAdapter
    },

    // setup all type of connections you could have
    connections: {
        // mysql connection configs
        mysqlLocalhost: {
            adapter: 'mysql',
            host: 'localhost',
            port: 3306,
            database: 'waterline_example', // change your database name here
            user: 'root',
            password: ''
        },

        pgSqlLocalhost: {
            adapter: 'pgSql',
            database: 'waterline_example',
            host: 'localhost',
            user: 'kishan',
            password: 'kk',
            port: 5432,
            poolSize: 10,
            ssl: false
        },
        //using sails-disk method
        diskLocal: {
            adapter: 'disk'
        }
    },

    // some config about migration or something
    defaults: {
        // migration mode
        migrate: 'alter'
    }
};