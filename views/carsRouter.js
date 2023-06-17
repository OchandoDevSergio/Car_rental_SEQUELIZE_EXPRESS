
const router = require('express').Router();

const carsController = require('../controllers/carsController');

router.get('/', carsController.getAllUsers);
router.post('/', carsController.createNewUser);
router.put('/', carsController.modifyUser);
router.delete('/', carsController.deleteUser);

module.exports = router;