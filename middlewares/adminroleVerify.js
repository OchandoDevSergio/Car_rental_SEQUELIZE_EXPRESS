
const isAdmin = (req, res, next) => {
  try {
    const bearerTokenAdmin = req.headers.authorization;
    if (!bearerTokenAdmin) {
      return res.status(501).json({
        success: true,
        message: "No tienes permiso para continuar",
      });
    }
    const tokenAdmin = bearerTokenAdmin.split(" ")[1];

    const decodedAdmin = jwt.verify(tokenAdmin, "hume");

    req.userId = decodedAdmin.userId;
    

    next();
  } catch (error) {
    return res.json({
      success: false,
      message: "Token invalido",
      error: error.message,
    });
  }
  };
  
  // const isAdmin = (req, res, next) => {
  //   try {
  //     if (req.role_id !== 1) {
  //       console.log(`El role_id es ${roleId}`)
  //       return res.status(501).json({
  //         success: true,
  //         message: "No tienes permisos para realizar esta acción",
  //       });
  //     }
  
  //     next();
  //   } catch (error) {
  //     return res.status(500).json({
  //       success: false,
  //       massage: "No se ha podido realizar la acción",
  //       error: error.message,
  //     });
  //   }
  // };



  module.exports = isAdmin;