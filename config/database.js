const mysql = require("mysql")
require('dotenv').config(); // carrega as variáveis do .env


const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

db.connect(function(err){
    if(err) {
        console.log(err)
        return
    }
    console.log("conexão com o banco realizada com sucesso")
})

module.exports = db;