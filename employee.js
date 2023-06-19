const mongoose = require("mongoose")

const EmployeeSchema = new mongoose.Schema({
   
        name: {
            type: String,
            required: [true, "Name Must Required"]
        },
        email: {
            type: String,
            required: [true, "Email Must Required"]
        },
        phone: {
            type: String,
            required: [true, "Phone Number Must Required"]
        },
        dsg: {
            type: String,
            required: [true, "Designation Must Required"]
        },
        salary: {
            type: String,
            required: [true, "Salary Must Required"]
        },
        city: {
            type: String,

        },
        state: {
            type: String,

        }
    })
const Employee = new mongoose.model("Employee", EmployeeSchema,)
module.exports = Employee