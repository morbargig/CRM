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

//     let data = require('../Data/Data.json')
//     data.map(d => new Customers(d).save())
// }, 100)

setTimeout(() => {

    let data = [{
        "_id": "5b9f48a29fbbbe1d375b0df1",
        "name": "Diann Goff",
        "email": "dianngoff@imant.com",
        "firstContact": "2018-06-02T21:00:00.000Z",
        "emailType": null,
        "sold": false,
        "owner": "Leila Howe",
        "country": "Greece"
    },
    {
        "_id": "5b9f48a2ddbbc13009f7b32d",
        "name": "Mcleod Joyner",
        "email": "mcleodjoyner@imant.com",
        "firstContact": "2018-05-31T21:00:00.000Z",
        "emailType": "D",
        "sold": true,
        "owner": "Janice Alvarado",
        "country": "Greece"
    },
    {
        "_id": "5b9f48a259c5392f55cd2484",
        "name": "Reyes Battle",
        "email": "reyesbattle@imant.com",
        "firstContact": "2018-01-21T22:00:00.000Z",
        "emailType": "B",
        "sold": true,
        "owner": "Janice Alvarado",
        "country": "Romania"
    },
    {
        "_id": "5b9f48a2f0f97de4f8d0f72e",
        "name": "Nieves Hewitt",
        "email": "nieveshewitt@imant.com",
        "firstContact": "2018-12-21T22:00:00.000Z",
        "emailType": "A",
        "sold": true,
        "owner": "Martin Massey",
        "country": "Croatia"
    },
    {
        "_id": "5b9f48a21da4ed57452e396a",
        "name": "Lena Bryan",
        "email": "lenabryan@imant.com",
        "firstContact": "2018-04-14T21:00:00.000Z",
        "emailType": "B",
        "sold": true,
        "owner": "Emily Durham",
        "country": "Malta"
    },
    {
        "_id": "5b9f48a2419e2bfb09a8121b",
        "name": "Jenifer Spears",
        "email": "jeniferspears@imant.com",
        "firstContact": "2018-06-02T21:00:00.000Z",
        "emailType": null,
        "sold": false,
        "owner": "Hull Conrad",
        "country": "Turkey"
    },
    {
        "_id": "5b9f48a257a91a29f0e75cca",
        "name": "Carver Ratliff",
        "email": "carverratliff@imant.com",
        "firstContact": "2017-12-27T22:00:00.000Z",
        "emailType": null,
        "sold": false,
        "owner": "Shepherd Stone",
        "country": "France"
    },
    {
        "_id": "5b9f48a2054c1093249e7e6e",
        "name": "Sonja Kim",
        "email": "sonjakim@imant.com",
        "firstContact": "2017-06-11T21:00:00.000Z",
        "emailType": null,
        "sold": false,
        "owner": "Shepherd Stone",
        "country": "Greece"
    },
    {
        "_id": "5b9f48a2733532954c711410",
        "name": "Haney Ramirez",
        "email": "haneyramirez@imant.com",
        "firstContact": "2017-04-25T21:00:00.000Z",
        "emailType": "B",
        "sold": true,
        "owner": "Emily Durham",
        "country": "Malaysia"
    },
    {
        "_id": "5b9f48a242a2e2395523e804",
        "name": "Tonya Parks",
        "email": "tonyaparks@imant.com",
        "firstContact": "2017-08-09T21:00:00.000Z",
        "emailType": "A",
        "sold": true,
        "owner": "Emily Durham",
        "country": "Turkey"
    },
    {
        "_id": "5b9f48a2ca185ed103e28fac",
        "name": "Cornelia Garner",
        "email": "corneliagarner@imant.com",
        "firstContact": "2018-06-24T21:00:00.000Z",
        "emailType": null,
        "sold": false,
        "owner": "Shepherd Stone",
        "country": "France"
    },
    {
        "_id": "5b9f48a211db9e7167314305",
        "name": "Kramer Castaneda",
        "email": "kramercastaneda@imant.com",
        "firstContact": "2018-04-05T21:00:00.000Z",
        "emailType": "B",
        "sold": true,
        "owner": "Barton Ramirez",
        "country": "Turkey"
    },
    {
        "_id": "5b9f48a2be0695f762530cb2",
        "name": "Lancaster Quinn",
        "email": "lancasterquinn@imant.com",
        "firstContact": "2017-04-17T21:00:00.000Z",
        "emailType": "C",
        "sold": true,
        "owner": "Emily Durham",
        "country": "Malta"
    },
    {
        "_id": "5b9f48a21947ebac7b598314",
        "name": "Christi Jackson",
        "email": "christijackson@imant.com",
        "firstContact": "2018-12-26T22:00:00.000Z",
        "emailType": null,
        "sold": false,
        "owner": "Janice Alvarado",
        "country": "Turkey"
    },
    {
        "_id": "5b9f48a283f713e3b85ac7af",
        "name": "French Sharpe",
        "email": "frenchsharpe@imant.com",
        "firstContact": "2016-05-24T21:00:00.000Z",
        "emailType": "A",
        "sold": true,
        "owner": "Barton Ramirez",
        "country": "France"
    },
    {
        "_id": "5b9f48a278ce11013d16308b",
        "name": "Stewart Anthony",
        "email": "stewartanthony@imant.com",
        "firstContact": "2017-04-27T21:00:00.000Z",
        "emailType": "B",
        "sold": true,
        "owner": "Martin Massey",
        "country": "Greece"
    },
    {
        "_id": "5b9f48a2292018ac11450c1e",
        "name": "Diana Walker",
        "email": "dianawalker@imant.com",
        "firstContact": "2018-03-30T21:00:00.000Z",
        "emailType": "B",
        "sold": true,
        "owner": "Janice Alvarado",
        "country": "France"
    },
    {
        "_id": "5b9f48a2a707cf82e16055e9",
        "name": "Baird Mckinney",
        "email": "bairdmckinney@imant.com",
        "firstContact": "2018-08-30T21:00:00.000Z",
        "emailType": "B",
        "sold": true,
        "owner": "Shepherd Stone",
        "country": "Greece"
    },
    {
        "_id": "5b9f48a24b94ff9bfbee15bd",
        "name": "Nichols Copeland",
        "email": "nicholscopeland@imant.com",
        "firstContact": "2018-12-15T22:00:00.000Z",
        "emailType": null,
        "sold": false,
        "owner": "Emily Durham",
        "country": "Turkey"
    },
    {
        "_id": "5b9f48a215c6a145ffdaea69",
        "name": "Juana Combs",
        "email": "juanacombs@imant.com",
        "firstContact": "2017-01-12T22:00:00.000Z",
        "emailType": null,
        "sold": false,
        "owner": "Janice Alvarado",
        "country": "Turkey"
    },
    {
        "_id": "5b9f48a2394f9a526405951b",
        "name": "Brady Madden",
        "email": "bradymadden@imant.com",
        "firstContact": "2018-12-18T22:00:00.000Z",
        "emailType": null,
        "sold": false,
        "owner": "Leila Howe",
        "country": "Romania"
    },
    {
        "_id": "5b9f48a2f7cb0683ec2d285f",
        "name": "Maryanne Garrison",
        "email": "maryannegarrison@imant.com",
        "firstContact": "2018-04-15T21:00:00.000Z",
        "emailType": null,
        "sold": false,
        "owner": "Janice Alvarado",
        "country": "France"
    },
    {
        "_id": "5b9f48a2ded58756a3d9adb8",
        "name": "Bauer Barry",
        "email": "bauerbarry@imant.com",
        "firstContact": "2018-10-25T21:00:00.000Z",
        "emailType": null,
        "sold": false,
        "owner": "Martin Massey",
        "country": "Greece"
    },
    {
        "_id": "5b9f48a2b13cfce540981296",
        "name": "Hazel Ferguson",
        "email": "hazelferguson@imant.com",
        "firstContact": "2017-04-21T21:00:00.000Z",
        "emailType": "A",
        "sold": true,
        "owner": "Hull Conrad",
        "country": "Turkey"
    },
    {
        "_id": "5b9f48a2fd4497f05c5de440",
        "name": "Tyson Richard",
        "email": "tysonrichard@imant.com",
        "firstContact": "2017-08-10T21:00:00.000Z",
        "emailType": null,
        "sold": false,
        "owner": "Hull Conrad",
        "country": "Greece"
    },
    {
        "_id": "5b9f48a2e47f8b20f0ec1ee5",
        "name": "Leah Sloan",
        "email": "leahsloan@imant.com",
        "firstContact": "2018-06-20T21:00:00.000Z",
        "emailType": null,
        "sold": false,
        "owner": "Shepherd Stone",
        "country": "Greece"
    },
    {
        "_id": "5b9f48a2998a2ffa9c5d3be1",
        "name": "Frances Wise",
        "email": "franceswise@imant.com",
        "firstContact": "2018-04-22T21:00:00.000Z",
        "emailType": null,
        "sold": false,
        "owner": "Janice Alvarado",
        "country": "France"
    },
    {
        "_id": "5b9f48a2caac14e111d2db79",
        "name": "Brigitte Blackwell",
        "email": "brigitteblackwell@imant.com",
        "firstContact": "2018-01-04T22:00:00.000Z",
        "emailType": "D",
        "sold": true,
        "owner": "Shepherd Stone",
        "country": "Malta"
    },
    {
        "_id": "5b9f48a27ee01cc10b8e3a71",
        "name": "Spears Clay",
        "email": "spearsclay@imant.com",
        "firstContact": "2016-07-27T21:00:00.000Z",
        "emailType": null,
        "sold": false,
        "owner": "Martin Massey",
        "country": "Romania"
    },
    {
        "_id": "5b9f48a27136a6919bdabe2d",
        "name": "Merritt Lowe",
        "email": "merrittlowe@imant.com",
        "firstContact": "2018-06-01T21:00:00.000Z",
        "emailType": "A",
        "sold": true,
        "owner": "Janice Alvarado",
        "country": "Croatia"
    },
    {
        "_id": "5b9f48a21bf5aed74ffcbc63",
        "name": "Tara Bruce",
        "email": "tarabruce@imant.com",
        "firstContact": "2016-06-17T21:00:00.000Z",
        "emailType": "B",
        "sold": true,
        "owner": "Janice Alvarado",
        "country": "Croatia"
    },
    {
        "_id": "5b9f48a21aec4784d1c83307",
        "name": "Adriana Becker",
        "email": "adrianabecker@imant.com",
        "firstContact": "2018-08-20T21:00:00.000Z",
        "emailType": null,
        "sold": false,
        "owner": "Janice Alvarado",
        "country": "Greece"
    },
    {
        "_id": "5b9f48a28b8db7a8804c6905",
        "name": "Shawna Atkins",
        "email": "shawnaatkins@imant.com",
        "firstContact": "2017-08-11T21:00:00.000Z",
        "emailType": "A",
        "sold": true,
        "owner": "Barton Ramirez",
        "country": "Turkey"
    },
    {
        "_id": "5b9f48a242f57ea7bc47f48b",
        "name": "Kristina Gillespie",
        "email": "kristinagillespie@imant.com",
        "firstContact": "2018-12-13T22:00:00.000Z",
        "emailType": null,
        "sold": false,
        "owner": "Hull Conrad",
        "country": "Croatia"
    },
    {
        "_id": "5b9f48a23b17f53c27bfdb40",
        "name": "Elisa Kaufman",
        "email": "elisakaufman@imant.com",
        "firstContact": "2017-02-02T22:00:00.000Z",
        "emailType": null,
        "sold": false,
        "owner": "Leila Howe",
        "country": "Greece"
    },
    {
        "_id": "5b9f48a2dc6634d69e448ceb",
        "name": "Essie Jenkins",
        "email": "essiejenkins@imant.com",
        "firstContact": "2018-06-18T21:00:00.000Z",
        "emailType": "B",
        "sold": true,
        "owner": "Janice Alvarado",
        "country": "France"
    },
    {
        "_id": "5b9f48a2f44a7dafa427b691",
        "name": "Cotton Burnett",
        "email": "cottonburnett@imant.com",
        "firstContact": "2017-06-09T21:00:00.000Z",
        "emailType": "D",
        "sold": true,
        "owner": "Emily Durham",
        "country": "Greece"
    },
    {
        "_id": "5b9f48a2e4c0731919c125c6",
        "name": "Claudia Mcknight",
        "email": "claudiamcknight@imant.com",
        "firstContact": "2017-05-25T21:00:00.000Z",
        "emailType": "A",
        "sold": true,
        "owner": "Leila Howe",
        "country": "Romania"
    },
    {
        "_id": "5b9f48a2edd5085bcb669584",
        "name": "Vonda Chan",
        "email": "vondachan@imant.com",
        "firstContact": "2017-10-11T21:00:00.000Z",
        "emailType": "B",
        "sold": true,
        "owner": "Leila Howe",
        "country": "France"
    },
    {
        "_id": "5b9f48a2750a61411b579c53",
        "name": "Mejia Serrano",
        "email": "mejiaserrano@imant.com",
        "firstContact": "2017-01-13T22:00:00.000Z",
        "emailType": "C",
        "sold": true,
        "owner": "Leila Howe",
        "country": "Greece"
    },
    {
        "_id": "5b9f48a2e4bfeacb37b1a649",
        "name": "Dina Thomas",
        "email": "dinathomas@imant.com",
        "firstContact": "2016-06-08T21:00:00.000Z",
        "emailType": "B",
        "sold": true,
        "owner": "Shepherd Stone",
        "country": "France"
    },
    {
        "_id": "5b9f48a2f93242d4a6b8a823",
        "name": "Antonia Hunter",
        "email": "antoniahunter@imant.com",
        "firstContact": "2018-06-05T21:00:00.000Z",
        "emailType": null,
        "sold": false,
        "owner": "Martin Massey",
        "country": "Romania"
    },
    {
        "_id": "5b9f48a25016f74989d22b72",
        "name": "Edith Dickson",
        "email": "edithdickson@imant.com",
        "firstContact": "2018-12-07T22:00:00.000Z",
        "emailType": null,
        "sold": false,
        "owner": "Martin Massey",
        "country": "France"
    },
    {
        "_id": "5b9f48a28055d7a5fd70cedc",
        "name": "Tommie Monroe",
        "email": "tommiemonroe@imant.com",
        "firstContact": "2018-05-14T21:00:00.000Z",
        "emailType": "A",
        "sold": true,
        "owner": "Martin Massey",
        "country": "Romania"
    },
    {
        "_id": "5b9f48a2565bed9fe1aff4c5",
        "name": "Jannie Marks",
        "email": "janniemarks@imant.com",
        "firstContact": "2016-12-23T22:00:00.000Z",
        "emailType": "D",
        "sold": true,
        "owner": "Janice Alvarado",
        "country": "Croatia"
    },
    {
        "_id": "5b9f48a22b20140550f68db7",
        "name": "Donaldson Marsh",
        "email": "donaldsonmarsh@imant.com",
        "firstContact": "2018-05-06T21:00:00.000Z",
        "emailType": "B",
        "sold": true,
        "owner": "Martin Massey",
        "country": "Turkey"
    },
    {
        "_id": "5b9f48a26f94b6f4b08a2c0b",
        "name": "Bernice Petty",
        "email": "bernicepetty@imant.com",
        "firstContact": "2018-06-23T21:00:00.000Z",
        "emailType": "D",
        "sold": true,
        "owner": "Emily Durham",
        "country": "Greece"
    },
    {
        "_id": "5b9f48a28aa1a0161ccb9cdd",
        "name": "Gilbert Branch",
        "email": "gilbertbranch@imant.com",
        "firstContact": "2016-01-13T22:00:00.000Z",
        "emailType": "B",
        "sold": true,
        "owner": "Barton Ramirez",
        "country": "France"
    },
    {
        "_id": "5b9f48a2d9761a883a3bebe5",
        "name": "Lott Grimes",
        "email": "lottgrimes@imant.com",
        "firstContact": "2017-02-21T22:00:00.000Z",
        "emailType": "B",
        "sold": true,
        "owner": "Martin Massey",
        "country": "Malaysia"
    },
    {
        "_id": "5b9f48a23685ba47f835224f",
        "name": "Susan Boyd",
        "email": "susanboyd@imant.com",
        "firstContact": "2018-02-23T22:00:00.000Z",
        "emailType": "D",
        "sold": true,
        "owner": "Barton Ramirez",
        "country": "Croatia"
    },
    {
        "_id": "5b9f48a2732d3ae94848105b",
        "name": "Georgina Willis",
        "email": "georginawillis@imant.com",
        "firstContact": "2018-12-22T22:00:00.000Z",
        "emailType": null,
        "sold": false,
        "owner": "Emily Durham",
        "country": "Malta"
    },
    {
        "_id": "5b9f48a220a500b711b57e2f",
        "name": "Elva Boyle",
        "email": "elvaboyle@imant.com",
        "firstContact": "2017-01-20T22:00:00.000Z",
        "emailType": "B",
        "sold": true,
        "owner": "Leila Howe",
        "country": "Turkey"
    },
    {
        "_id": "5b9f48a20b1527a0f0b5ce3b",
        "name": "Jenna Reeves",
        "email": "jennareeves@imant.com",
        "firstContact": "2018-10-14T21:00:00.000Z",
        "emailType": "B",
        "sold": true,
        "owner": "Hull Conrad",
        "country": "Croatia"
    },
    {
        "_id": "5b9f48a256858902ae499795",
        "name": "Jodie Wells",
        "email": "jodiewells@imant.com",
        "firstContact": "2018-01-19T22:00:00.000Z",
        "emailType": null,
        "sold": false,
        "owner": "Martin Massey",
        "country": "France"
    },
    {
        "_id": "5b9f48a278b227a931c1af50",
        "name": "Geneva Mcleod",
        "email": "genevamcleod@imant.com",
        "firstContact": "2018-12-06T22:00:00.000Z",
        "emailType": "B",
        "sold": true,
        "owner": "Emily Durham",
        "country": "France"
    },
    {
        "_id": "5b9f48a2cb2fb0225111a097",
        "name": "Burt Beasley",
        "email": "burtbeasley@imant.com",
        "firstContact": "2016-10-23T21:00:00.000Z",
        "emailType": "B",
        "sold": true,
        "owner": "Leila Howe",
        "country": "Romania"
    },
    {
        "_id": "5b9f48a26702da801788ad82",
        "name": "Dillard Valenzuela",
        "email": "dillardvalenzuela@imant.com",
        "firstContact": "2018-05-11T21:00:00.000Z",
        "emailType": "B",
        "sold": true,
        "owner": "Shepherd Stone",
        "country": "Turkey"
    },
    {
        "_id": "5b9f48a2cb54761abb520c8c",
        "name": "Santiago Swanson",
        "email": "santiagoswanson@imant.com",
        "firstContact": "2016-11-30T22:00:00.000Z",
        "emailType": null,
        "sold": false,
        "owner": "Martin Massey",
        "country": "France"
    },
    {
        "_id": "5b9f48a210807b8844f9de4c",
        "name": "Paulette Robertson",
        "email": "pauletterobertson@imant.com",
        "firstContact": "2018-07-02T21:00:00.000Z",
        "emailType": "A",
        "sold": true,
        "owner": "Barton Ramirez",
        "country": "Turkey"
    },
    {
        "_id": "5b9f48a22b45ea63f57d848c",
        "name": "Carlson Shepherd",
        "email": "carlsonshepherd@imant.com",
        "firstContact": "2018-02-28T22:00:00.000Z",
        "emailType": "D",
        "sold": true,
        "owner": "Martin Massey",
        "country": "Croatia"
    },
    {
        "_id": "5b9f48a2c354601d737dccc8",
        "name": "Mullins Waller",
        "email": "mullinswaller@imant.com",
        "firstContact": "2018-12-18T22:00:00.000Z",
        "emailType": "B",
        "sold": true,
        "owner": "Barton Ramirez",
        "country": "France"
    },
    {
        "_id": "5b9f48a22746ddf3700bdad5",
        "name": "Coleman Massey",
        "email": "colemanmassey@imant.com",
        "firstContact": "2017-03-01T22:00:00.000Z",
        "emailType": null,
        "sold": false,
        "owner": "Shepherd Stone",
        "country": "Greece"
    },
    {
        "_id": "5b9f48a23afdd4b107bd63d7",
        "name": "Yolanda Eaton",
        "email": "yolandaeaton@imant.com",
        "firstContact": "2018-12-22T22:00:00.000Z",
        "emailType": "B",
        "sold": true,
        "owner": "Janice Alvarado",
        "country": "France"
    },
    {
        "_id": "5b9f48a29db850b9f101664a",
        "name": "Keri Walsh",
        "email": "keriwalsh@imant.com",
        "firstContact": "2018-12-07T22:00:00.000Z",
        "emailType": "B",
        "sold": true,
        "owner": "Martin Massey",
        "country": "Greece"
    },
    {
        "_id": "5b9f48a253417d5be1d8d20a",
        "name": "Juarez Whitley",
        "email": "juarezwhitley@imant.com",
        "firstContact": "2017-12-05T22:00:00.000Z",
        "emailType": null,
        "sold": false,
        "owner": "Shepherd Stone",
        "country": "France"
    },
    {
        "_id": "5b9f48a2dfcff4c109601e4a",
        "name": "Wallace Stanley",
        "email": "wallacestanley@imant.com",
        "firstContact": "2018-08-04T21:00:00.000Z",
        "emailType": "B",
        "sold": true,
        "owner": "Barton Ramirez",
        "country": "France"
    },
    {
        "_id": "5b9f48a2778ab341ae5498e5",
        "name": "Lambert Curtis",
        "email": "lambertcurtis@imant.com",
        "firstContact": "2018-09-10T21:00:00.000Z",
        "emailType": null,
        "sold": false,
        "owner": "Emily Durham",
        "country": "Turkey"
    },
    {
        "_id": "5b9f48a24095c31e5829e672",
        "name": "Amie Cooke",
        "email": "amiecooke@imant.com",
        "firstContact": "2018-08-21T21:00:00.000Z",
        "emailType": null,
        "sold": false,
        "owner": "Janice Alvarado",
        "country": "Croatia"
    },
    {
        "_id": "5b9f48a25285fb94318647e0",
        "name": "Helen Cameron",
        "email": "helencameron@imant.com",
        "firstContact": "2018-11-17T22:00:00.000Z",
        "emailType": "D",
        "sold": true,
        "owner": "Janice Alvarado",
        "country": "Malta"
    },
    {
        "_id": "5b9f48a2c862379f36c85795",
        "name": "Hope Love",
        "email": "hopelove@imant.com",
        "firstContact": "2017-04-28T21:00:00.000Z",
        "emailType": "D",
        "sold": true,
        "owner": "Martin Massey",
        "country": "Croatia"
    },
    {
        "_id": "5b9f48a24a6e0d34b625b386",
        "name": "Tammi Jarvis",
        "email": "tammijarvis@imant.com",
        "firstContact": "2017-10-22T21:00:00.000Z",
        "emailType": "D",
        "sold": true,
        "owner": "Janice Alvarado",
        "country": "Malta"
    },
    {
        "_id": "5b9f48a2f4fdb1c82aadedd3",
        "name": "Sue Moody",
        "email": "suemoody@imant.com",
        "firstContact": "2017-06-05T21:00:00.000Z",
        "emailType": "B",
        "sold": true,
        "owner": "Leila Howe",
        "country": "Croatia"
    },
    {
        "_id": "5b9f48a2d4624f8496df0ea9",
        "name": "Cecilia Ochoa",
        "email": "ceciliaochoa@imant.com",
        "firstContact": "2016-09-18T21:00:00.000Z",
        "emailType": "D",
        "sold": true,
        "owner": "Martin Massey",
        "country": "Croatia"
    },
    {
        "_id": "5b9f48a28ae7862b01c4d4c4",
        "name": "Barker Lindsey",
        "email": "barkerlindsey@imant.com",
        "firstContact": "2016-01-08T22:00:00.000Z",
        "emailType": "B",
        "sold": true,
        "owner": "Hull Conrad",
        "country": "Turkey"
    },
    {
        "_id": "5b9f48a270212c24a608997c",
        "name": "Fry Bradley",
        "email": "frybradley@imant.com",
        "firstContact": "2016-04-17T21:00:00.000Z",
        "emailType": "B",
        "sold": true,
        "owner": "Janice Alvarado",
        "country": "Greece"
    },
    {
        "_id": "5b9f48a2081ab88de5c7abe5",
        "name": "Joy Abbott",
        "email": "joyabbott@imant.com",
        "firstContact": "2018-05-04T21:00:00.000Z",
        "emailType": null,
        "sold": false,
        "owner": "Barton Ramirez",
        "country": "Greece"
    },
    {
        "_id": "5b9f48a2c9a69194604a2fb7",
        "name": "Lilly Conner",
        "email": "lillyconner@imant.com",
        "firstContact": "2018-12-27T22:00:00.000Z",
        "emailType": "B",
        "sold": true,
        "owner": "Shepherd Stone",
        "country": "Greece"
    },
    {
        "_id": "5b9f48a2ff93e3a72f857867",
        "name": "Washington Contreras",
        "email": "washingtoncontreras@imant.com",
        "firstContact": "2017-12-10T22:00:00.000Z",
        "emailType": "A",
        "sold": true,
        "owner": "Emily Durham",
        "country": "Turkey"
    },
    {
        "_id": "5b9f48a2a459294f1c1e6082",
        "name": "Alissa Townsend",
        "email": "alissatownsend@imant.com",
        "firstContact": "2017-01-25T22:00:00.000Z",
        "emailType": null,
        "sold": false,
        "owner": "Emily Durham",
        "country": "Malta"
    },
    {
        "_id": "5b9f48a2b03aa8c36c358ae8",
        "name": "Ester Hartman",
        "email": "esterhartman@imant.com",
        "firstContact": "2018-05-10T21:00:00.000Z",
        "emailType": null,
        "sold": false,
        "owner": "Martin Massey",
        "country": "France"
    },
    {
        "_id": "5b9f48a265b784fca2916fad",
        "name": "Tamera Sawyer",
        "email": "tamerasawyer@imant.com",
        "firstContact": "2016-06-14T21:00:00.000Z",
        "emailType": "D",
        "sold": true,
        "owner": "Emily Durham",
        "country": "Romania"
    },
    {
        "_id": "5b9f48a2cf1303b0a3a30389",
        "name": "Ginger Christian",
        "email": "gingerchristian@imant.com",
        "firstContact": "2017-12-13T22:00:00.000Z",
        "emailType": null,
        "sold": false,
        "owner": "Martin Massey",
        "country": "France"
    },
    {
        "_id": "5b9f48a237dcc61213df22f3",
        "name": "Chaney Key",
        "email": "chaneykey@imant.com",
        "firstContact": "2016-04-14T21:00:00.000Z",
        "emailType": "A",
        "sold": true,
        "owner": "Martin Massey",
        "country": "Malaysia"
    },
    {
        "_id": "5b9f48a24d1bea4076059ded",
        "name": "Mayo Small",
        "email": "mayosmall@imant.com",
        "firstContact": "2018-04-23T21:00:00.000Z",
        "emailType": null,
        "sold": false,
        "owner": "Barton Ramirez",
        "country": "France"
    },
    {
        "_id": "5b9f48a246fbe8fd2b3553ba",
        "name": "Arline Hayes",
        "email": "arlinehayes@imant.com",
        "firstContact": "2016-04-02T21:00:00.000Z",
        "emailType": "D",
        "sold": true,
        "owner": "Janice Alvarado",
        "country": "Malta"
    },
    {
        "_id": "5b9f48a2ab54eea399de7e6c",
        "name": "Ellis Newman",
        "email": "ellisnewman@imant.com",
        "firstContact": "2017-05-05T21:00:00.000Z",
        "emailType": null,
        "sold": false,
        "owner": "Martin Massey",
        "country": "France"
    },
    {
        "_id": "5b9f48a243835990d8765cba",
        "name": "Janie Holloway",
        "email": "janieholloway@imant.com",
        "firstContact": "2018-12-19T22:00:00.000Z",
        "emailType": "A",
        "sold": true,
        "owner": "Janice Alvarado",
        "country": "France"
    },
    {
        "_id": "5b9f48a20c0d8668d3e8bf54",
        "name": "Hale Mckee",
        "email": "halemckee@imant.com",
        "firstContact": "2017-05-17T21:00:00.000Z",
        "emailType": "B",
        "sold": true,
        "owner": "Janice Alvarado",
        "country": "Romania"
    },
    {
        "_id": "5b9f48a29ca7d10634af2db1",
        "name": "Wise Bartlett",
        "email": "wisebartlett@imant.com",
        "firstContact": "2018-04-06T21:00:00.000Z",
        "emailType": "A",
        "sold": true,
        "owner": "Barton Ramirez",
        "country": "Malaysia"
    },
    {
        "_id": "5b9f48a2cdad2a77d7f606a9",
        "name": "Hendricks Sandoval",
        "email": "hendrickssandoval@imant.com",
        "firstContact": "2018-01-11T22:00:00.000Z",
        "emailType": "D",
        "sold": true,
        "owner": "Barton Ramirez",
        "country": "France"
    },
    {
        "_id": "5b9f48a2a94469416a06ec7d",
        "name": "Lyons Merrill",
        "email": "lyonsmerrill@imant.com",
        "firstContact": "2018-05-09T21:00:00.000Z",
        "emailType": "B",
        "sold": true,
        "owner": "Janice Alvarado",
        "country": "France"
    },
    {
        "_id": "5b9f48a21242f7e4baa6b998",
        "name": "Wilkerson Gonzales",
        "email": "wilkersongonzales@imant.com",
        "firstContact": "2017-12-13T22:00:00.000Z",
        "emailType": "B",
        "sold": true,
        "owner": "Barton Ramirez",
        "country": "France"
    },
    {
        "_id": "5b9f48a237bdbeb25ce7e982",
        "name": "Kathy Washington",
        "email": "kathywashington@imant.com",
        "firstContact": "2018-03-12T22:00:00.000Z",
        "emailType": null,
        "sold": false,
        "owner": "Emily Durham",
        "country": "France"
    },
    {
        "_id": "5b9f48a2f515ab4ae730dbf7",
        "name": "Espinoza Foreman",
        "email": "espinozaforeman@imant.com",
        "firstContact": "2018-01-25T22:00:00.000Z",
        "emailType": null,
        "sold": false,
        "owner": "Hull Conrad",
        "country": "Malta"
    },
    {
        "_id": "5b9f48a2f04184d960893b46",
        "name": "Roberts Merritt",
        "email": "robertsmerritt@imant.com",
        "firstContact": "2018-01-18T22:00:00.000Z",
        "emailType": "D",
        "sold": true,
        "owner": "Emily Durham",
        "country": "France"
    },
    {
        "_id": "5b9f48a26d0a263b75695b45",
        "name": "Mariana Wilder",
        "email": "marianawilder@imant.com",
        "firstContact": "2017-05-15T21:00:00.000Z",
        "emailType": null,
        "sold": false,
        "owner": "Emily Durham",
        "country": "Malta"
    },
    {
        "_id": "5b9f48a2854060c1e52ddd77",
        "name": "Harmon Owens",
        "email": "harmonowens@imant.com",
        "firstContact": "2016-12-06T22:00:00.000Z",
        "emailType": null,
        "sold": false,
        "owner": "Hull Conrad",
        "country": "Turkey"
    },
    {
        "_id": "5b9f48a28af764126fb4f2c2",
        "name": "Margaret Bernard",
        "email": "margaretbernard@imant.com",
        "firstContact": "2016-05-09T21:00:00.000Z",
        "emailType": null,
        "sold": false,
        "owner": "Janice Alvarado",
        "country": "France"
    },
    {
        "_id": "5b9f48a2ec468df8183eea3f",
        "name": "Nina Buck",
        "email": "ninabuck@imant.com",
        "firstContact": "2018-04-19T21:00:00.000Z",
        "emailType": "B",
        "sold": true,
        "owner": "Barton Ramirez",
        "country": "Greece"
    },
    {
        "_id": "5b9f48a21e29fd3502769575",
        "name": "Elma Keller",
        "email": "elmakeller@imant.com",
        "firstContact": "2016-09-12T21:00:00.000Z",
        "emailType": "B",
        "sold": true,
        "owner": "Emily Durham",
        "country": "France"
    },
    {
        "_id": "5b9f48a274072ca0c2410638",
        "name": "Marshall Mills",
        "email": "marshallmills@imant.com",
        "firstContact": "2018-07-19T21:00:00.000Z",
        "emailType": "B",
        "sold": true,
        "owner": "Martin Massey",
        "country": "Romania"
    },
    {
        "_id": "5b9f48a2ced9b7827d525b1e",
        "name": "Hubbard Nielsen",
        "email": "hubbardnielsen@imant.com",
        "firstContact": "2018-04-13T21:00:00.000Z",
        "emailType": "A",
        "sold": true,
        "owner": "Janice Alvarado",
        "country": "Greece"
    },
    {
        "_id": "5b9f48a25611dcef165d19ee",
        "name": "Larson Kemp",
        "email": "larsonkemp@imant.com",
        "firstContact": "2018-04-29T21:00:00.000Z",
        "emailType": null,
        "sold": false,
        "owner": "Janice Alvarado",
        "country": "Turkey"
    },
    {
        "_id": "5b9f48a2f8321120a3a47379",
        "name": "Carolyn Dennis",
        "email": "carolyndennis@imant.com",
        "firstContact": "2018-11-15T22:00:00.000Z",
        "emailType": "A",
        "sold": true,
        "owner": "Janice Alvarado",
        "country": "France"
    },
    {
        "_id": "5b9f48a2c8ecb0e8df055355",
        "name": "Albert Wooten",
        "email": "albertwooten@imant.com",
        "firstContact": "2016-06-29T21:00:00.000Z",
        "emailType": "B",
        "sold": true,
        "owner": "Emily Durham",
        "country": "Greece"
    },
    {
        "_id": "5b9f48a226f039e8a2853a0a",
        "name": "Mamie Cochran",
        "email": "mamiecochran@imant.com",
        "firstContact": "2018-04-28T21:00:00.000Z",
        "emailType": null,
        "sold": false,
        "owner": "Barton Ramirez",
        "country": "Turkey"
    },
    {
        "_id": "5b9f48a24e6a85c47597eb1d",
        "name": "Boyle Dixon",
        "email": "boyledixon@imant.com",
        "firstContact": "2018-05-30T21:00:00.000Z",
        "emailType": "B",
        "sold": true,
        "owner": "Barton Ramirez",
        "country": "Greece"
    },
    {
        "_id": "5b9f48a24904b2fc7b5254bb",
        "name": "Lydia Callahan",
        "email": "lydiacallahan@imant.com",
        "firstContact": "2016-12-28T22:00:00.000Z",
        "emailType": "A",
        "sold": true,
        "owner": "Leila Howe",
        "country": "France"
    },
    {
        "_id": "5b9f48a2985b6303d3af12aa",
        "name": "Ware Cole",
        "email": "warecole@imant.com",
        "firstContact": "2017-01-20T22:00:00.000Z",
        "emailType": null,
        "sold": false,
        "owner": "Emily Durham",
        "country": "Turkey"
    },
    {
        "_id": "5b9f48a264c57b6457a88eb2",
        "name": "Krista Pitts",
        "email": "kristapitts@imant.com",
        "firstContact": "2018-05-25T21:00:00.000Z",
        "emailType": "B",
        "sold": true,
        "owner": "Martin Massey",
        "country": "France"
    },
    {
        "_id": "5b9f48a21454219a5d6888b2",
        "name": "Beard Giles",
        "email": "beardgiles@imant.com",
        "firstContact": "2018-11-12T22:00:00.000Z",
        "emailType": null,
        "sold": false,
        "owner": "Emily Durham",
        "country": "France"
    },
    {
        "_id": "5b9f48a26c9722627ddaf4ab",
        "name": "Morgan Floyd",
        "email": "morganfloyd@imant.com",
        "firstContact": "2018-10-10T21:00:00.000Z",
        "emailType": "D",
        "sold": true,
        "owner": "Emily Durham",
        "country": "France"
    }
    ]
    data.map(d => new Customers(d).save())
}, 100)

module.exports = router