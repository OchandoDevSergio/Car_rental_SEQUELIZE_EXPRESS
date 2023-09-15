const { Rental } = require("../models");

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
};

rentalsController.createNewRental = async (req, res) => {
  try {
    const newRental = await Rental.create({
      user_id: req.body.user_id,
      car_id: req.body.car_id,
      rental_date: req.body.rental_date,
      return_date: req.body.return_date,
      price: req.body.price,
    });

    return res.send(newRental);
  } catch (error) {
    return res.json({
      success: false,
      message: "No ha sido posible crear el alquiler",
      error: error.message,
    });
  }
};

rentalsController.modifyRental = async (req, res) => {
  let body = req.body;

  try {
    const updateRental = await Rental.update(
      {
        user_id: req.body.user_id,
        car_id: req.body.car_id,
        rental_date: req.body.rental_date,
        return_date: req.body.return_date,
        price: req.body.price,
      },
      {
        where: {
          id: body.id,
        },
      }
    );

    return res.json({
      success: true,
      message: "El alquiler ha sido actualizado",
      data: updateRental,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "No se ha podido actualizar los datos del alquiler",
      error: error.message,
    });
  }
};

rentalsController.deleteRental = async (req, res) => {
  let body = req.body;

  try {
    const deleteRental = await Rental.destroy({
      where: {
        id: body.id,
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
};

module.exports = rentalsController;
