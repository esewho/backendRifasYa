const { Ticket, Raffle, User } = require("../config/database")

class TicketController {
	constructor() {}

	static async buyTicket(userId, amount) {
		if (!amount || amount <= 0) throw new Error("Cantidad inválida")

		const tickets = await Promise.all(
			Array.from({ length: amount }).map(() => {
				Ticket.create({ userId })
			})
		)
		return tickets
	}
}

module.exports = TicketController
