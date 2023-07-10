
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
  
  module.exports = isAdmin;