const { User } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const authController = {};

//Esta funcion valdrá para hacer login devolviendo un token
authController.login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res.status(501).json({
        success: true,
        message: "Usuario o email incorrecto",
      });
    }

    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      return res.status(501).json({
        success: true,
        message: "Contraseña o usuario incorrecto",
      });
    }

    //En este punto ya sabemos que el password es correcto, creamos un token
    const token = jwt.sign(
      {
        userId: user.id,
        userName: user.name,
        roleId: user.role_id,
        userSurnames: user.surnames,
        userPhone: user.phone,
        userDni: user.dni,
        userEmail: user.email,
      },
      "kant",
      {
        expiresIn: "4h",
      }
    );

    return res.json({
      success: true,
      message: "Usuario logeado",
      token: token,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "El usuario no ha podido logearse",
      error: error.menssage,
    });
  }
};

module.exports = authController;
