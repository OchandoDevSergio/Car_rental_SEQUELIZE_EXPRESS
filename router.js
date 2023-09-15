
const router = require('express').Router();

const carsRouter = require('./views/carsRouter.js');
const rentalsRouter = require('./views/rentalsRouter.js');
const usersRouter = require('./views/usersRouter.js');
const authRouter = require('./views/authsRouter.js');

//Routing......

router.use('/cars', carsRouter);
router.use('/rentals', rentalsRouter);
router.use('/users', usersRouter);
router.use('/auth', authRouter);

module.exports = router;