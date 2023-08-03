
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
  try {

    const newCar = await Car.create({
      plate_number: req.body.plate_number,
      model: req.body.model,
      year: req.body.year,
      picture: req.body.picture
    });

    return res.send(newCar);

  } catch (error) {
    return res.json({
      success: false,
      message: "No ha sido posible crear el coche",
      error: error.message,
    });
  }
}

carsController.modifyCar = async (req, res) => {
  let body = req.body;

  try {

      const updateCar = await Car.update(
        {
          plate_number: req.body.plate_number,
          model: req.body.model,
          year: req.body.year,
          picture: req.body.picture
      },
      {
                where: {
          id: body.id
        }
      }
      );


      return res.json({
        success: true,
        message: "El coche ha sido actualizado",
        data: updateCar,
      });

  } catch (error) {
      return res.status(500).json({
        success: false,
        message: "No se ha podido actualizar los datos del coche",
        error: error.message,
      }); 
  }
}

carsController.deleteCar = async (req, res) => {


    let body = req.body;

    try {
        const deleteCar = await Car.destroy({
          where: {
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