const UserRouter = require("./user.routes")
const RaffleRouter = require("./raffle.routes")
const TicketRouter = require("./ticket.routes")
const { Router } = require("express")

const router = Router()

router.use("/user", UserRouter)
router.use("/raffle", RaffleRouter)
router.use("/ticket", TicketRouter)

module.exports = router
