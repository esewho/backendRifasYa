const UserHandler = require("../handlers/user.handler")
const { Router } = require("express")
const verifyToken = require("../middlewares/auth.middleware")

const UserRouter = Router()

UserRouter.post("/register", UserHandler.registerUserHandler)
UserRouter.post("/login", UserHandler.loginUserHandler)
UserRouter.get("/:id/profile", UserHandler.getUserProfileHandler)
UserRouter.get(
	"/me/profile",
	verifyToken,
	UserHandler.getUserProfilePrivateHandler
)

module.exports = UserRouter
