
const carsController = {};

carsController.getAllUsers = async (req, res) => {

    return res.send("Hola, has llamado a cars con un get,,,,");
}

carsController.createNewUser = async (req, res) => {

    return res.send("Hola, has llamado a cars con un post,,,,");
}

carsController.modifyUser = async (req, res) => {

    return res.send("Hola, has llamado a cars con un put,,,,");
}

carsController.deleteUser = async (req, res) => {

    return res.send("Hola, has llamado a cars con un delete,,,,");
}

module.exports = carsController;