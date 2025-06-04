const UserRouter = require("./user.routes")
const RaffleRouter = require("./raffle.routes")
const { Router } = require("express")

const router = Router()

router.use("/users", UserRouter)
router.use("/raffles", RaffleRouter)

module.exports = router
