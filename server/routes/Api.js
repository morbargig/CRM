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
        Customers.delete({})
        Customers.find({}, function (err, x) {
            let result = []
            x.map(u => u[Catagory].includes(text) ? result.push(u) : null)
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
//     const temps = [{
//         name: 'mor bargig',
//         email: 'morbargig@gmail.com',
//         firstContact: '2002-12-09',
//         emailType: 'A',
//         sold: true,
//         owner: "mor bargig",
//         country: "Israel"
//     },
//     {
//         name: 'bar mor',
//         email: 'test@gmail.com',
//         firstContact: '2002-12-03',
//         emailType: 'B',
//         sold: true,
//         owner: "oren dvir",
//         country: "US"
//     },
//     {
//         name: 'ronen amar',
//         email: 'ronen@gmail.com',
//         firstContact: '2002-05-09',
//         emailType: 'A',
//         sold: true,
//         owner: "roni dror",
//         country: "UK"
//     },
//     {
//         name: 'noa yogev',
//         email: 'noa@gmail.com',
//         firstContact: '2002-12-02',
//         emailType: 'A',
//         sold: true,
//         owner: "daniela peretz",
//         country: "New York"
//     },
//     {
//         name: 'liel linoy',
//         email: 'liell@gmail.com',
//         firstContact: '2020-12-02',
//         emailType: 'D',
//         sold: true,
//         owner: "shlomi baruch",
//         country: "Spain"
//     },
//     {
//         name: 'michael catz',
//         email: 'micahelC@gmail.com',
//         firstContact: '1990-03-02',
//         emailType: 'F',
//         sold: true,
//         owner: "shir avraham",
//         country: "Shinay"
//     },
//     {
//         name: 'lian mualem',
//         email: 'lian@gmail.com',
//         firstContact: '1989-07-02',
//         emailType: 'F',
//         sold: false,
//         owner: "matan choen",
//         country: "Shinay"
//     },
//     {
//         name: 'hen bar zhoer',
//         email: 'lian@gmail.com',
//         firstContact: '1989-07-02',
//         emailType: 'F',
//         sold: false,
//         owner: "alia amit",
//         country: "Russian"
//     }
//     ]
//     const data = []
//     let i = 0
//     function randomIntFromInterval(min, max) { // min and max included 
//         return Math.floor(Math.random() * (max - min + 1) + min)
//     }
//     const temp = {
//         name: [],
//         email: [],
//         firstContact: [],
//         emailType: [],
//         sold: [],
//         owner: [],
//         country: []
//     }
//     temps.forEach(i => {
//         Object.keys(i).forEach(t => {
//             temp[t].push(i[t])
//         })
//     })
//     while (i < 700) {
//         const rndInt = () => randomIntFromInterval(1, 6)
//         data.push(Object.keys(temp).reduce((p, c) => ({ ...p, [c]: temp[c][rndInt()] }), {}))
//         i++
//     }
//     console.log(data)
//     Customers.remove({}, ()=>null)
//     data.map(d => new Customers(d).save())
// }, 10000)


module.exports = router