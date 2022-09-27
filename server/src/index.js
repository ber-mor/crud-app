const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

const commentsRouter = require('./comments.routes')
app.use('/', commentsRouter)

const PORT = 3001
app.listen(PORT, ()=>{
    console.log(`running on port ${PORT}`)
})