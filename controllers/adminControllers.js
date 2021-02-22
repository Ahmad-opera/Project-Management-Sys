const mongoose = require('mongoose');
const Team = require('../models/team');
const Faculty = require('../models/faculty');
const Department = require('../models/department');
const TeamMember = require('../models/teamMember');
const FacultyAdmin = require('../models/facultyAdmin');
const ProjectAssessor = require('../models/assessor');
const ProjectSupervisor = require('../models/supervisor');

// Get All
module.exports.faculty_get_all = async (req, res) => {
    const findFaculty = await Faculty.find();
    if(findFaculty == {}) return res.json({ error: { msg: "No Faculty is found!" } });
    try {
        res.send(findInstitutions);
    } catch (error) {
        res.send(error)
    }
}

// Create Institution
module.exports.faculty_add = async (req, res) => {
    const exists = await Faculty.findOne({ title: req.body.title });
    if (exists) return res.send({ error:{ msg: "Faculty Already Exists"}});
    try {
        const newInstitute = new Faculty({
            title: req.body.title
        })
        const savedInstitute = await newInstitute.save();
        res.json(savedInstitute);
    } catch (error) {
        return res.send(error);
    }
}

// Delete Institution
module.exports.faculty_delete = async (req, res) => {
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

// Create Deparment
module.exports.department_create = async (req, res) => {
    const exists = await Department.findOne({ title: req.body.title });
    if (exists) return res.json({ error: { msg: "Department Already Exists", existing_data: exists }});
    const checkFacultyExist = await Faculty.findOne({title: req.body.faculty});
    if (!checkFacultyExist) return res.json({ error: { msg: "Faculty Does not Exist!"}});
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

// Register Faculty Admin
module.exports.register_faculty_admin = async (req, res) => {
    const checkFacultyExist = await Faculty.findOne({title: req.body.faculty});
    if (!checkFacultyExist) return res.json({ error: { msg: "Faculty Does not Exist!"}});
    const exists = await FacultyAdmin.findOne({ userID: req.body.userID });
    if (exists) return res.json({ error: { msg: "A Profile already exists with same User ID!"}});
    try {
        const { userID, p_number, email, faculty, password} = req.body;
        const newFacultyAdmin = new FacultyAdmin({
            userID, p_number, email, faculty, password
        })
        const savedFacultyAdmin = await newFacultyAdmin.save();
        res.json(savedFacultyAdmin);
    } catch (error) {
        return res.send(error);
    }
} 

// Register Project Assessor
module.exports.register_project_assessor = async (req, res) => {
    const checkFacultyExist = await Faculty.findOne({title: req.body.faculty});
    if (!checkFacultyExist) return res.json({ error: { msg: "Faculty Does not Exist!"}});
    const exists = await ProjectAssessor.findOne({ userID: req.body.userID });
    if (exists) return res.json({ error: { msg: "A Profile already exists with same User ID!", existing_data: exists }});
    try {
        const { Firstname, Lastname, userID, p_number, email, faculty, password} = req.body;
        const newProjectAssessor = new ProjectAssessor({
            Firstname, Lastname, userID, p_number, email, faculty, password
        })
        const savedProjectAssessor = await newProjectAssessor.save();
        res.json(savedProjectAssessor);
    } catch (error) {
        return res.send(error);
    }
} 

// Register Project Supervisor
module.exports.register_project_supervisor = async (req, res) => {
    const checkFacultyExist = await Faculty.findOne({title: req.body.faculty});
    if (!checkFacultyExist) return res.json({ error: { msg: "Faculty Does not Exist!"}});
    const exists = await ProjectSupervisor.findOne({ userID: req.body.userID });
    if (exists) return res.json({ error: { msg: "A Supervisor Profile already exists with same User ID!", existing_data: exists }});
    try {
        const { Firstname, Lastname, userID, p_number, email, faculty, department, password} = req.body;
        const newProjectSupervisor = new ProjectSupervisor({
            Firstname, Lastname, userID, p_number, email, faculty, department, password
        })
        const savedProjectSupervisor = await newProjectSupervisor.save();
        res.json(savedProjectSupervisor);
    } catch (error) {
        return res.send(error);
    }
} 

// Create Team
module.exports.create_project_team = async (req, res) => {
    const checkFacultyExist = await Faculty.findOne({ title: req.body.faculty });
    if (!checkFacultyExist) return res.json({ error: { msg: "Faculty Does not Exist!"}});
    const checkDepartmentExist = await Department.findOne({ title: req.body.department });
    if (!checkDepartmentExist) return res.json({ error: { msg: "Department Does not Exist!"}});
    const { title, year, faculty, department } = req.body;
    const exists = await Team.findOne({ title, year, faculty, department });
    if (exists) return res.json({ error: { msg: "A Team of same year exists with same title!", existing_data: exists }});
    try {
        const newTeam = new Team({
            title, year, faculty, department
        })
        const savedTeam = await newTeam.save();
        res.json(savedTeam);   
    } catch (error) {
        return res.send(error);
    }
} 

// Create Team Member Profile
module.exports.create_team_member = async (req, res) => {
    const checkFacultyExist = await Faculty.findOne({ title: req.body.faculty });
    if (!checkFacultyExist) return res.json({ error: { msg: "Faculty Does not Exist!"}});
    const checkDepartmentExist = await Department.findOne({ title: req.body.department });
    if (!checkDepartmentExist) return res.json({ error: { msg: "Department Does not Exist!"}});
    const exists = await TeamMember.findOne({ reg_no: req.body.reg_no });
    if (exists) return res.json({ error: { msg: "A Student exists with same reg. number!", existing_data: exists }});
    try {
        const { firstname, lastname, state_of_origin, year, reg_no, CGPA, email, password, faculty, department, team_leader } = req.body;
        const newTeamMember = new TeamMember({
            firstname, lastname, state_of_origin, year, reg_no, CGPA, email, password, faculty, department, team_leader
        })
        const savedTeamMember = await newTeamMember.save();
        res.json(savedTeamMember);   
    } catch (error) {
        return res.send(error);
    }
} 