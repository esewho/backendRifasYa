const { User } = require("../config/database")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require("../config/utils/constants")

class UserController {
	constructor() {}

	static async registerUser(username, email, password) {
		const existingUser = User.findOne({ where: { email } })
		if (existingUser) throw new Error("Email ya registrado")

		const hashedPassword = await bcrypt.hash(password, 10)

		const newUser = await User.create({
			username,
			email,
			password: hashedPassword,
		})

		const token = jwt.sign({ id: newUser.id }, JWT_SECRET, {
			expiresIn: "7d",
		})
		return { newUser, token }
	}

	static async loginUser(email, password) {
		const user = await User.findOne({ where: { email } })
		if (!user) throw new Error("Usuario no encontrado")

		const passwordMatch = await bcrypt.compare(password, user.password)

		if (!passwordMatch) throw new Error("Contraseña incorrecta")

		const token = jwt.sign({ id: user.id }, JWT_SECRET, {
			expiresIn: "7d",
		})
		return { user, token }
	}
}

module.exports = UserController
