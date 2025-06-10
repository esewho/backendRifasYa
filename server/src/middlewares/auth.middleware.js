const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require("../config/utils/constants")

const verifyToken = (req, res, next) => {
	const authHeader = req.headers.authorization
	if (!authHeader) {
		return res.status(400).json({ error: "Token no proporcionado" })
	}

	const token = authHeader.split(" ")[1]
	console.log(token)

	try {
		const decoded = jwt.verify(token, JWT_SECRET)
		req.userId = decoded.id
		next()
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

module.exports = verifyToken
