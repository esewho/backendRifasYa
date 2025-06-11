const TicketHandler = require("../src/handlers/ticket.handler")
const { Router } = require("express")
const verifyToken = require("../src/middlewares/auth.middleware")

const TicketRouter = Router()

TicketRouter.post("/", verifyToken, TicketHandler.createTicket)
