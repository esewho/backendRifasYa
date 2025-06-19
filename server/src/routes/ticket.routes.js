const TicketHandler = require("../handlers/ticket.handler")
const { Router } = require("express")
const verifyToken = require("../middlewares/auth.middleware")

const TicketRouter = Router()

TicketRouter.post("/", verifyToken, TicketHandler.createTicketHandler)
TicketRouter.delete("/", verifyToken, TicketHandler.removeTicketHandler)
