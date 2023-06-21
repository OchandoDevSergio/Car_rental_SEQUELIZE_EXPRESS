
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


    let body = req.body;

    try {
        // const carId = req.params.id;
        const deleteCar = await Car.destroy({
          where: {
            // id: carId,
            id: body.id
          },
        });
        return res.json({
          success: true,
          message: "El coche ha sido eliminado",
          data: deleteCar,
        });
      } catch (error) {
        return res.status(500).json({
          success: false,
          message: "El coche no ha podido ser eliminado",
          error: error.message,
        });
      }
    

}

module.exports = carsController;