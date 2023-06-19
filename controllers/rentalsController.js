
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

    return res.send("Hola, has llamado a rentals con un delete,,,,");
}

module.exports = rentalsController;