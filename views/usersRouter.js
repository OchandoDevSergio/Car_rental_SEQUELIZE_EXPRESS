
const router = require('express').Router();

const auth = require('../middlewares/tokenVerify');

const usersController = require('../controllers/usersController');

//para este sí deberías de ser admin....
router.get('/', auth, usersController.getAllUsers);
router.post('/', usersController.createNewUser);
router.put('/', auth, usersController.modifyUser);
//para este sí deberías de ser admin....
router.delete('/', auth, usersController.deleteUser);

module.exports = router;