
const router = require('express').Router();

const carsController = require('../controllers/carsController');

router.get('/', carsController.getAllCars);
router.post('/', carsController.createNewCar);
router.put('/', carsController.modifyCar);
router.delete('/', carsController.deleteCar);

module.exports = router;