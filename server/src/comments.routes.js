const express = require("express");
const router = express.Router();
const db = require("./db")

router.get("/", (req, res)=>{
    db.query('SELECT * FROM Comments ORDER BY id DESC', (error, result)=>{
        if (error) throw error
        res.send(result)
    })
})

router.post("/new", (req, res)=>{
    data = {
        username: req.body.username,
        comment: req.body.comment
    }
    db.query(`INSERT INTO Comments SET ?`, data, (error, result)=>{
        if (error) throw error
        res.send(result)
    })
})

router.put("/update/:id", (req, res)=>{
    const id = req.params.id
    data = {
        username: req.body.username,
        comment: req.body.comment
    }
    db.query('UPDATE Comments SET ? WHERE id = ?', [data, id], (error, result)=>{
        if (error) throw error
        res.send(result)
    })
})

router.delete("/delete/:id", (req, res)=>{
    const id = req.params.id
    db.query('DELETE FROM Comments WHERE id = ?', [id], (error, result)=>{
        if (error) throw error
        res.send(result)
    })
})

module.exports = router