const TicketHandler = require("../handlers/ticket.handler")
const { Router } = require("express")
const verifyToken = require("../middlewares/auth.middleware")

const TicketRouter = Router()

TicketRouter.post("/buy", verifyToken, TicketHandler.buyTicketHandler)
TicketRouter.delete("/remove", verifyToken, TicketHandler.removeTicketHandler)

module.exports = TicketRouter
