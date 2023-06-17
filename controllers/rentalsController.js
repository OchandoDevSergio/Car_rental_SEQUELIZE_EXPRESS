
const rentalsController = {};

rentalsController.getAllUsers = async (req, res) => {

    return res.send("Hola, has llamado a rentals con un get,,,,");
}

rentalsController.createNewUser = async (req, res) => {

    return res.send("Hola, has llamado a rentals con un post,,,,");
}

rentalsController.modifyUser = async (req, res) => {

    return res.send("Hola, has llamado a rentals con un put,,,,");
}

rentalsController.deleteUser = async (req, res) => {

    return res.send("Hola, has llamado a rentals con un delete,,,,");
}

module.exports = rentalsController;