const mongoose = require('mongoose');

const projectSupervisorSchema = new mongoose.Schema({
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
    department: {
        type: String,
        required: true
    },
    project_groups: {
        type: Array
    },
    password: {
        type: String,
        required: true
    }
})

const ProjectSupervisor = mongoose.model('ProjectSupervisor', projectSupervisorSchema);
module.exports = ProjectSupervisor;