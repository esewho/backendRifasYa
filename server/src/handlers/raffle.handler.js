const RaffleController = require("../controllers/raffle.controllers")

class RaffleHandler {
	static async createRaffleHandler(req, res) {
		try {
			const creatorId = req.userId
			const { title, description, pricePerTicket, maxTickets, endDate, image } =
				req.body

			const raffle = await RaffleController.createRaffle({
				title,
				description,
				pricePerTicket,
				maxTickets,
				endDate,
				image,
				creatorId,
			})
			res.status(200).json(raffle)
		} catch (error) {
			res.status(400).json({ error: "Error en el handler de crear un sorteo" })
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

	static async getRafflesByIdHandler(req, res) {
		try {
			const { raffleId } = req.params
			const raffle = await RaffleController.getRafflesById(raffleId)
			res.status(200).json(raffle)
		} catch (error) {
			res.status(400).json({ error: "Error al buscar sorteo por id" })
		}
	}

	static async updateRaffleHandler(req, res) {
		try {
			const { raffleId } = req.params
			const userId = req.userId
			const updateData = req.body
			const updateRaffle = await RaffleController.updateRaffle(
				raffleId,
				updateData,
				userId
			)
			res.status(200).json(updateRaffle)
		} catch (error) {
			res.status(400).json({ error: "Error al editar el sorteo" })
		}
	}

	static async deleteRaffleHandler(req, res) {
		try {
			const { raffleId } = req.params
			const userId = req.userId
			await RaffleController.deleteRaffle(raffleId, userId)
			res.status(200).json({ message: "Rifa eliminada correctamente" })
		} catch (error) {
			res.status(400).json({ error: "Error al eliminar la rifa" })
		}
	}
}

module.exports = RaffleHandler
