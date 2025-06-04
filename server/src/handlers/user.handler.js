const UserController = require("../controllers/user.controllers")

class UserHandler {
	constructor() {}

	static async createUserHandler(req, res) {
		try {
			const { username, email, password, accountType } = req.body
		} catch (error) {}
	}
}

module.exports = UserHandler
