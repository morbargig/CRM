// const request = require("request")
const express = require('express')
const router = express.Router()
// const bodyParser = require('body-parser')
const Customers = require('../Schema/CustomersSchema')



router.get('/Customers', (req, res) => {
    Customers.find({}, function (err, x) {
        res.send(x)
    })
})

// router.get('/Customer', (req, res) => {
//     Customers.find({ name: 'mor bargig' }, function (err, x) {
//         res.send(x)
//     })
// })


router.delete('/deleteUser/:id', (req, res) => {
    let id = req.params.id
    Customers.findOneAndDelete({ "_id": id }, function (err, x) {
        res.send(x)
    })
})



router.get('/CustomersByCatgories', (req, res) => {
    Customers.find({}, function (err, x) {
        res.send(x)
    })
})

router.get('/searchByCatagory/:Catagory/:text', (req, res) => {
    // let a = req.body

    let Catagory = req.params.Catagory
    let text = req.params.text
    console.log(text, Catagory)
    if (Catagory === "emailType") {
        Customers.find({ [Catagory]: text }, function (err, x) {
            res.send(x)
        })
    }
    else {
        Customers.find({}, function (err, x) {
            let result = []
            x.map(u => u[Catagory].includes(text) || u[Catagory] == text ? result.push(u) : null)
            // console.log(result)
            res.send(result)
        })
    }
})

// searchByCatgory


router.post('/Customer', (req, res) => {
    const data = req.body
    console.log(data)
    new Customers(data).save()
    res.end('saved')
})



router.put('/upDateCustomerSold/:id', function (req, res) {
    let id = req.params.id
    let updatedData = req.body
    Customers.findOneAndUpdate({ "_id": id }, updatedData, function () {
        res.end()
        console.log(updatedData, id)
    })
})
// updata if sild or not

router.put('/upDateCustomer/:id', function (req, res) {
    let id = req.params.id
    let updatedData = req.body
    Customers.findOneAndUpdate({ "_id": id }, updatedData, function () {
        res.end()
        console.log(updatedData, id)

    })

})
// update more stuff



// router.put('/Customers/:email', function (req, res) {
//     let email = req.params.email
//     let owner = req.body.owner
//     Customers.find({ 'email': email }).exec(function (err, client) {
//         Customers[0].owner = owner
//         Customers[0].save()
//         res.send(Customers)
//     })
// })

// router.put('/Customers/:email', function (req, res) {
//     const email = req.params.email
//     const updatedData = req.body
//     Customers.findOneAndUpdate({ email: email }, updatedData, function () {
//         res.end()
//         console.log(updatedData)
//     })
// })


// // pull some duumy data from some jason file and push it to my mongoseDB

// setTimeout(() => {
//     let data = require('../Data/Data.json')
//     data.map(d => new Customers(d).save())
// }, 100)

module.exports = router