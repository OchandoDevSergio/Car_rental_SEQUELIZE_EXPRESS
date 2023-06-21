
const { Rental } = require('../models');

const rentalsController = {};

rentalsController.getAllRentals = async (req, res) => {

    try {

        const allRentals = await Rental.findAll();

        return res.json({
            success: true,
            message: "Datos de todos los alquileres recuperados",
            data: allRentals,
        });


    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Los datos no han podido ser recuperados",
            error: error.message,
        });

    }

}

rentalsController.createNewRental = async (req, res) => {

    return res.send("Hola, has llamado a rentals con un post,,,,");
}

rentalsController.modifyRental = async (req, res) => {

    return res.send("Hola, has llamado a rentals con un put,,,,");
}

rentalsController.deleteRental = async (req, res) => {

    let body = req.body;

    try {
        const deleteRental = await Rental.destroy({
          where: {
            id: body.id
          },
        });
        return res.json({
          success: true,
          message: "El alquiler ha sido eliminado",
          data: deleteRental,
        });
      } catch (error) {
        return res.status(500).json({
          success: false,
          message: "El alquiler no ha podido ser eliminado",
          error: error.message,
        });
      }
    

}

module.exports = rentalsController;