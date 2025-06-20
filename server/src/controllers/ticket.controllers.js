const { Ticket, Raffle, User } = require("../config/database")
const Tickets = require("../models/Tickets")

class TicketController {
	constructor() {}

	static async buyTicket(userId, raffleId, amount) {
		const raffle = await Raffle.findByPk(raffleId)
		if (!amount || amount <= 0) throw new Error("Cantidad inválida")
		if (!raffle) throw new Error("Rifa no encontrada")
		if (!raffle.isActive) throw new Error("La rifa está inactiva")

		const soldTickets = await Ticket.count({ where: { raffleId } })

		if (soldTickets + amount > raffle.maxTickets) {
			throw new Error("No hay suficientes tickets disponibles")
		}

		const tickets = await Promise.all(
			Array.from({ length: amount }).map(() => {
				return Ticket.create({ userId, raffleId })
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
