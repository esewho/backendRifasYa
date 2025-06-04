const RaffleController = require("../controllers/raffle.controllers")

class RaffleHandler {
	static async createRaffleHandler(req, res) {
		try {
			const raffle = await RaffleController.createRaffle(req.body)
			res.status(200).json(raffle)
		} catch (error) {
			res.status(400).json({ message: "Error al crear la rifa" })
		}
	}

	static async getAllRafflesHandler(req, res) {
		try {
			const raffles = await RaffleController.getAllRaffles()
			res.status(200).json(raffles)
		} catch (error) {
			res.status(400).json({ error: "Error al traer las rifas" })
		}
	}
}

module.exports = RaffleHandler
