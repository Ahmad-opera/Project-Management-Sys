const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    reg_no: {
        type: String,
        required: true
    },
    state_of_origin: {
        type: String,
        required: true
    },
    CGPA: {
        type: Number,
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
    password: {
        type: String,
        required: true
    },
    team_leader: {
        type: Boolean,
        default: false
    }
})

const TeamMember = mongoose.model('TeamMember', teamMemberSchema);
module.exports = TeamMember;