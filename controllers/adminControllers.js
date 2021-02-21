const mongoose = require('mongoose');
const Institution = require('../models/institution');
const Department = require('../models/department');

// Get All
module.exports.institution_get_all = async (req, res) => {
    const findInstitutions = await Institution.find();
    if(findInstitutions == {}) return res.json({ error: { msg: "No Institution is found!" } });
    try {
        res.send(findInstitutions);
    } catch (error) {
        res.send(error)
    }
}

// Create Institution
module.exports.institution_add = async (req, res) => {
    const exists = await Institution.findOne({ title: req.body.title });
    if (exists) return res.send({ error:{ msg: "Institution Already Exists"}});
    try {
        const newInstitute = new Institution({
            title: req.body.title
        })
        const savedInstitute = await newInstitute.save();
        res.json(savedInstitute);
    } catch (error) {
        return res.send(error);
    }
}

// Delete Institution
module.exports.institution_delete = async (req, res) => {
    const { _id, title } = req.body;
    const checkExist = await Institution.findOne({ _id, title });
    if(!checkExist) return res.json({ error: { msg: "Institution not found!" } });
    try {
        const deleteInstitute = await Institution.findOneAndRemove({_id, title});
        res.send();
    } catch (error) {
        res.status(500).json({ error: {msg: "Server Error", error }});
    }
}

module.exports.department_create = async (req, res) => {
    const exists = await Department.findOne({ title: req.body.title });
    if (exists) return res.json({ error: { msg: "Department Already Exists", existing_data: exists }});
    const checkFacultyExist = await faculty.
    try {
        const newDepartment = new Department({
            title: req.body.title,
            faculty: req.body.faculty
        })
        const savedDepartment = await newDepartment.save();
        res.send(savedDepartment);
    } catch (error) {
        return res.send(error);
    }
}