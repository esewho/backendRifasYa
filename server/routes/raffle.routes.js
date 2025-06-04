const RaffleHandler = require("../src/handlers/raffle.handler")
const { Router } = require("express")
const verifyToken = require("../src/middlewares/auth.middleware")

const RaffleRouter = Router()

RaffleRouter.post("/", verifyToken, RaffleHandler.createRaffleHandler)
RaffleRouter.get("/", verifyToken, RaffleHandler.getAllRafflesHandler)

module.exports = RaffleRouter
