const express = require('express')
const mongoose = require('mongoose')
const { MongoClient, ServerApiVersion } = require('mongodb')
const app = express()

const uri = ""
mongoose.connect(uri)
const con = mongoose.connection

con.on('open', function(){
    console.log('connected ....');
})

app.use(express.json())

const alienRouter = require('./routes/aliens')
app.use('/aliens', alienRouter)

app.listen(9000, () => {
    console.log('Server listening on port 9000')
})
