
const { User } = require('../models');

const usersController = {};

usersController.getAllUsers = async (req, res) => {

    try {

        const allUsers = await User.findAll();

        return res.json({
            success: true,
            message: "Datos de todos los clientes recuperados",
            data: allUsers,
        });


    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Los datos no han podido ser recuperados",
            error: error.message,
        });

    }

}

usersController.createNewUser = async (req, res) => {

    return res.send("Hola, has llamado a users con un post,,,,");
}

usersController.modifyUser = async (req, res) => {

    return res.send("Hola, has llamado a users con un put,,,,");
}

usersController.deleteUser = async (req, res) => {

    let body = req.body;

    try {
        const deleteUser = await User.destroy({
          where: {
            id: body.id
          },
        });
        return res.json({
          success: true,
          message: "El cliente ha sido eliminado",
          data: deleteUser,
        });
      } catch (error) {
        return res.status(500).json({
          success: false,
          message: "El cliente no ha podido ser eliminado",
          error: error.message,
        });
      }
    

}

module.exports = usersController;