const TicketController = require("../controllers/ticket.controllers")

class TicketHandler {
	constructor() {}

	static async createTicketHandler(req, res) {
		try {
			const userId = req.userId
			const { raffleId } = req.body

			const ticket = await TicketController.createTicket(userId, raffleId)
			res.status(200).json(ticket)
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
