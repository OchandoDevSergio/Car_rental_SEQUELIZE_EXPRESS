
const router = require('express').Router();

const usersController = require('../controllers/usersController');

router.get('/', usersController.getAllUsers);
router.post('/', usersController.createNewUser);
router.put('/', usersController.modifyUser);
router.delete('/', usersController.deleteUser);

module.exports = router;