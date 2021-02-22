const mongoose = require('mongoose');

const projectAssessorSchema = new mongoose.Schema({
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

const ProjectAssessor = mongoose.model('ProjectAssessor', projectAssessorSchema);
module.exports = ProjectAssessor;