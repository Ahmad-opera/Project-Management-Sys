const router = require('express').Router()
const adminControllers = require('../controllers/adminControllers')

router.get('/institutions', adminControllers.institution_get_all);
router.post('/institution/add', adminControllers.institution_add);
router.delete('/institution/delete', adminControllers.institution_delete);

router.post('/department/add', adminControllers.department_create);
module.exports = router;