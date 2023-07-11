
const router = require('express').Router();

const auth = require('../middlewares/tokenVerify');
const isAdmin = require('../middlewares/adminroleVerify');

const carsController = require('../controllers/carsController');


router.get('/', carsController.getAllCars);
router.post('/', auth, isAdmin, carsController.createNewCar);
router.put('/', auth, isAdmin, carsController.modifyCar);
router.delete('/', auth, isAdmin, carsController.deleteCar);

module.exports = router;