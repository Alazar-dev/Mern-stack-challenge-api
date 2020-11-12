const mongoose = require('mongoose');
const schema = mongoose.Schema;

const employeeSchema = new schema({
    Name: {
        type: String,
        required: [true, 'Name is required']
    },
    Date_of_birth:{
        type: Number
    },
    Gender: {
        type: String
    },
    Salary:{
        type: Number
    }
})

const employee = mongoose.model('employee', employeeSchema)
module.exports = employee;