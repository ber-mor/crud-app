const mysql = require('mysql')
require('dotenv').config()

const db = mysql.createPool({
    host: process.env.DB_REMOTE_HOST,
    port: process.env.DB_REMOTE_PORT,
    user: process.env.DB_REMOTE_USER,
    password: process.env.DB_REMOTE_PASSWORD,
    database: process.env.DB_REMOTE_NAME,
    timezone: 'utc'
})

db.getConnection(error=>{
    if (error) throw error
    console.log("Database connected")
})

module.exports = db