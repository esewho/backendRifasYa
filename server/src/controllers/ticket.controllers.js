const { Ticket, Raffle, User } = require("../config/database")
const Tickets = require("../models/Tickets")

class TicketController {
	constructor() {}

	static async buyTicket(userId, amount) {
		if (!amount || amount <= 0) throw new Error("Cantidad inválida")

		const tickets = await Promise.all(
			Array.from({ length: amount }).map(() => {
				return Ticket.create({ userId })
			})
		)
		return tickets
	}

	static async removeTicket(userId, raffleId, amount) {
		if (!amount || amount <= 0) throw new Error("Cantidad inválida")

		const tickets = await Ticket.findAll({
			where: {
				userId,
				raffleId,
			},
			limit: amount,
		})
		for (const ticket of tickets) {
			await ticket.destroy()
		}
		return tickets
	}
}

module.exports = TicketController
