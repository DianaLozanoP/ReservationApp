const { Client } = require("pg");
const password = require('./password');

let database = 'lunchly'

let db = new Client({
    user: 'dianaloz',
    host: '/var/run/postgresql',
    database: database,
    password: password,
    port: 5432

});

db.connect()
    .then(() => {
        console.log('Connected to the database');
        // Perform database operations here
    })
    .catch(err => {
        console.error('Error connecting to the database:', err);
        // Additional error details for debugging
        console.error('Error code:', err.code); // PostgreSQL error code
        console.error('Error message:', err.message); // Description of the error
        console.error('Error stack:', err.stack); // Stack trace
    });

module.exports = db;