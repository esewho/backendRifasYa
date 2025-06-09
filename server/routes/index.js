const UserRouter = require("./user.routes")
const RaffleRouter = require("./raffle.routes")
const { Router } = require("express")

const router = Router()

router.use("/user", UserRouter)
router.use("/raffle", RaffleRouter)

module.exports = router
