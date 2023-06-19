
const { Car } = require('../models');

const carsController = {};

carsController.getAllCars = async (req, res) => {

    try {

        const allCars = await Car.findAll();

        return res.json({
            success: true,
            message: "Datos de todos los coches recuperados",
            data: allCars,
        });


    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Los datos no han podido ser recuperados",
            error: error.message,
        });

    }

}

carsController.createNewCar = async (req, res) => {

    return res.send("Hola, has llamado a cars con un post,,,,");
}

carsController.modifyCar = async (req, res) => {

    return res.send("Hola, has llamado a cars con un put,,,,");
}

carsController.deleteCar = async (req, res) => {

    return res.send("Hola, has llamado a cars con un delete,,,,");
}

module.exports = carsController;