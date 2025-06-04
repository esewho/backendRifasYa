const UserHandler = require("../src/handlers/user.handler")
const { Router } = require("express")

const UserRouter = Router()

UserRouter.post("/", UserHandler.createUserHandler)

module.exports = UserRouter
