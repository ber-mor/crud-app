const express = require('express')
const mysql = require('mysql')
require('dotenv').config()
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

const PORT = 3001

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

app.get("/", (req, res)=>{
    db.query('SELECT * FROM Comments', (error, result)=>{
        if (error) throw error
        res.send(result)
    })
})

app.post("/new", (req, res)=>{
    data = {
        username: req.body.username,
        comment: req.body.comment
    }
    db.query(`INSERT INTO Comments SET ?`, data, (error, result)=>{
        if (error) throw error
        res.send(result)
    })
})

app.put("/update/:id", (req, res)=>{
    const id = req.params.id
    data = {
        username: req.body.username,
        comment: req.body.comment
    }
    db.query('UPDATE TABLE Comments SET ? WHERE id = ?', [data, id], (error, result)=>{
        if (error) throw error
        res.send(result)
    })
})

app.delete("/delete/:id", (req, res)=>{
    const id = req.params.id
    db.query('DELETE FROM Comments WHERE id = ?', [id], (error, result)=>{
        if (error) throw error
        res.send(result)
    })
})

app.listen(PORT, ()=>{
    console.log(`running on port ${PORT}`)
})