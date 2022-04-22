require('dotenv').config();

async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    });
    global.connection = connection;
    return connection;
}

async function getDataForTesting(){
    if(!process.env.DB_TEST_TABLE)
        return [];

    const connection = await connect();
    const [rows] = await connection.query(`SELECT * FROM ${process.env.DB_TEST_TABLE}`);
    return rows;
}

module.exports = { connect, getDataForTesting };
