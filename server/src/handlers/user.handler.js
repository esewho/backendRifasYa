const UserController = require("../controllers/user.controllers")

class UserHandler {
	constructor() {}

	static async registerUserHandler(req, res) {
		try {
			const { username, email, password } = req.body

			const { user, token } = await UserController.registerUser(
				username,
				email,
				password
			)
			res.status(200).json({ user, token })
		} catch (error) {
			res.status(400).json({ error: "Error al registrarse" })
		}
	}

	static async loginUserHandler(req, res) {
		try {
			const { email, password } = req.body

			const { user, token } = await UserController.loginUser(email, password)
			res.status(200).json({ user, token })
		} catch (error) {
			res.status(400).json({ error: "Error al loguearse" })
		}
	}

	static async getUserProfileHandler(req, res) {
		try {
			const { id } = req.params
			const user = await UserController.getUserWithRafflesById(id)
			res.status(200).json(user)
		} catch (error) {
			res.status(400).json({ error: "Error al mostrar el perfil" })
		}
	}

	static async getUserProfilePrivateHandler(req, res) {
		try {
			const user = await UserController.getUserWithRafflesById(req.userId)
			res.status(200).json(user)
		} catch (error) {
			res.status(400).json({ error: "Error al mostrar tu perfil" })
		}
	}
}

module.exports = UserHandler
