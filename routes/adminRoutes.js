const router = require('express').Router()
const adminControllers = require('../controllers/adminControllers')


// Faculty Controller
router.post('/faculty/add', adminControllers.faculty_add);
router.get('/faculties', adminControllers.faculty_get_all);
router.delete('/faculty/delete', adminControllers.faculty_delete);

// Faculty Admin Controller
router.post('/faculty/admin/add', adminControllers.register_faculty_admin);

// Departments Controller
router.post('/department/add', adminControllers.department_create);

// Project Assessor Controller
router.post('/assessor/add', adminControllers.register_project_assessor);

// Project Supervisor Controller
router.post('/supervisor/add', adminControllers.register_project_supervisor);

// Project Team Controller
router.post('/team/create', adminControllers.create_project_team);

// Project Team Member Controller
router.post('/team/member/create', adminControllers.create_team_member);

module.exports = router;