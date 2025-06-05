const { Raffle, User } = require("../config/database")

class RaffleController {
	static async createRaffle({
		title,
		description,
		pricePerTicket,
		maxTickets,
		endDate,
		image,
	}) {
		const newRaffle = await Raffle.create({
			title,
			description,
			pricePerTicket,
			maxTickets,
			endDate,
			image,
		})
		const newRaffleWithUser = await Raffle.findByPk(newRaffle.id, {
			include: {
				model: User,
				attributes: ["id", "username", "email", "accountType"],
			},
		})
		return newRaffleWithUser
	}

	static async getAllRaffles() {
		const raffles = await Raffle.findAll({
			include: {
				model: User,
				attributes: ["id", "username", "email", "accountType"],
			},
		})
		return raffles
	}
}

module.exports = RaffleController
