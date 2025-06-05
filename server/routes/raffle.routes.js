const RaffleHandler = require("../src/handlers/raffle.handler")
const { Router } = require("express")
const verifyToken = require("../src/middlewares/auth.middleware")

const RaffleRouter = Router()

RaffleRouter.post("/", verifyToken, RaffleHandler.createRaffleHandler)
RaffleRouter.get("/", verifyToken, RaffleHandler.getAllRafflesHandler)
RaffleRouter.get("/:raffleId", verifyToken, RaffleHandler.getRafflesByIdHandler)
RaffleRouter.put(":/raffleId", verifyToken, RaffleHandler.updateRaffleHandler)
RaffleRouter.delete(
	":/raffleId",
	verifyToken,
	RaffleHandler.deleteRaffleHandler
)

module.exports = RaffleRouter
