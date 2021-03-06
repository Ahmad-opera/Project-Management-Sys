const mongoose = require('mongoose');

const facultyAdminSchema = new mongoose.Schema({
    Firstname: {
        type: String,
        required: true
    },
    Lastname: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true
    },
    p_number: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    faculty: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const FacultyAdmin = mongoose.model('FacultyAdmin', facultyAdminSchema);
module.exports = FacultyAdmin;