const express = require('express');
require('dotenv').config();

const db = require('./db');
const app = express();
app.use(express.json());

const connection = db.connect();
// const connection = true;
app.get("/", async (req, res) => {
    const data = await db.getDataForTesting();
    res.send({
        dbConnected: !!connection,
        data
    });
});
app.listen(process.env.NODE_PORT || 3000, () => console.log("Servidor iniciado na porta 3000"));
