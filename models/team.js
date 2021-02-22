const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    supervisor: {
        type: Object
    },
    faculty: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    members: {
        type: Array
    }
})

const Team = mongoose.model('Team', teamSchema);
module.exports = Team;