
const router = require('express').Router();

const rentalsController = require('../controllers/rentalsController');

router.get('/', rentalsController.getAllRentals);
router.post('/', rentalsController.createNewRental);
router.put('/', rentalsController.modifyRental);
router.delete('/', rentalsController.deleteRental);

module.exports = router;