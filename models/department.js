const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    faculty: {
        type: String,
        required: true
    }
});

const Department = mongoose.model('Department', departmentSchema);
module.exports = Department;