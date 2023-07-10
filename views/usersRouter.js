
const router = require('express').Router();

const auth = require('../middlewares/tokenVerify');
const isAdmin = require('../middlewares/adminroleVerify');

const usersController = require('../controllers/usersController');

//para este sí deberías de ser admin....
router.get('/', auth, isAdmin, usersController.getAllUsers);
router.post('/', usersController.createNewUser);
router.put('/', auth, usersController.modifyUser);
//para este sí deberías de ser admin....
router.delete('/', auth, isAdmin, usersController.deleteUser);

module.exports = router;