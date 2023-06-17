
const usersController = {};

usersController.getAllUsers = async (req, res) => {

    return res.send("Hola, has llamado a users con un get,,,,");
}

usersController.createNewUser = async (req, res) => {

    return res.send("Hola, has llamado a users con un post,,,,");
}

usersController.modifyUser = async (req, res) => {

    return res.send("Hola, has llamado a users con un put,,,,");
}

usersController.deleteUser = async (req, res) => {

    return res.send("Hola, has llamado a users con un delete,,,,");
}

module.exports = usersController;