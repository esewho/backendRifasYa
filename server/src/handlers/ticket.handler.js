const TicketController = require("../controllers/ticket.controllers")

class TicketHandler {
	constructor() {}

	static async buyTicketHandler(req, res) {
		try {
			const userId = req.userId
			const { raffleId, amount } = req.body

			const tickets = await TicketController.buyTicket(userId, raffleId, amount)
			res.status(200).json({ message: "Participación completada", tickets })
		} catch (error) {
			res.status(400).json({ error: error.message })
		}
	}

	static async removeTicketHandler(req, res) {
		try {
			const userId = req.userId
			const { raffleId, amount } = req.body

			if (!raffleId) {
				return res.status(400).json({ error: error.message })
			}

			const removedTickets = await TicketController.removeTicket(
				userId,
				raffleId,
				amount
			)
			res.status(200).json(removedTickets)
		} catch (error) {
			res.status(400).json({ error: error.message })
		}
	}
}

module.exports = TicketHandler
