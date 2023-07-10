
const router = require('express').Router();

const auth = require('../middlewares/tokenVerify');
const isAdmin = require('../middlewares/adminroleVerify');

const rolesController = require('../controllers/rolesController');

//para este sí deberías de ser admin....
router.get('/', auth, isAdmin, rolesController.getAllRoles);
//para este sí deberías de ser admin....
router.post('/', auth, isAdmin, rolesController.createNewRole);
//para este sí deberías de ser admin....
router.put('/', auth, isAdmin, rolesController.modifyRole);
//para este sí deberías de ser admin....
router.delete('/', auth, isAdmin, rolesController.deleteRole);

module.exports = router;