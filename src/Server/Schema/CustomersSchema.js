const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CustomersSchema = new Schema({
    // _id: String,
    name: String,
    email: String,
    firstContact: Date,
    emailType: String,
    sold: Boolean,
    owner: String,
    country: String
})


const Customers = mongoose.model("Customers", CustomersSchema)

module.exports = Customers