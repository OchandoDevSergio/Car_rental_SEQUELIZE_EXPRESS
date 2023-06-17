
const router = require('express').Router();

const rentalsController = require('../controllers/rentalsController');

router.get('/', rentalsController.getAllUsers);
router.post('/', rentalsController.createNewUser);
router.put('/', rentalsController.modifyUser);
router.delete('/', rentalsController.deleteUser);

module.exports = router;