// const DBNAME = process.env.DBNAME
// const PORT = process.env.PORT
// const request = require("request")
const path = require('path')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const router = require('./src/Server/routes/Api')

// const request = require("request")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(express.static(path.join(__dirname, 'dist')))
// const Transaction = require('./transactionSchema')

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

app.use(express.static(path.join(__dirname, 'build')))


app.use("/", router)

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})




let port = 3030
let DBname = 'CRM'

mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/${DBname}`, { useNewUrlParser: true }).then(() => {
    app.listen(process.env.PORT || port, () => console.log(`Running server on port` + port))
})



// Mongoose setup

// //use setTimeout to simulate an API call - you can, of course, do this without the setTimeout, but using setTimeout will simplify your transition to connecting your to your server later on

// setTimeout(() => {
//     let data = require('../data.json')
//     //populate state with data
//   }, 100)
