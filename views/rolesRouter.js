
const router = require('express').Router();

const auth = require('../middlewares/tokenVerify');

const rolesController = require('../controllers/rolesController');

//para este sí deberías de ser admin....
router.get('/', auth, rolesController.getAllRoles);
//para este sí deberías de ser admin....
router.post('/', auth, rolesController.createNewRole);
//para este sí deberías de ser admin....
router.put('/', auth, rolesController.modifyRole);
//para este sí deberías de ser admin....
router.delete('/', auth, rolesController.deleteRole);

module.exports = router;