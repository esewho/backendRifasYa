const { Raffle, User } = require("../config/database")

class RaffleController {
	constructor() {}
	static async createRaffle({
		title,
		description,
		pricePerTicket,
		maxTickets,
		endDate,
		image,
		creatorID,
	}) {
		const newRaffle = await Raffle.create({
			title,
			description,
			pricePerTicket,
			maxTickets,
			endDate,
			image,
			userId: creatorID,
			isActive: true,
		})
		return newRaffle
	}

	static async getAllRaffles() {
		const raffles = await Raffle.findAll({
			include: {
				model: User,
				attributes: ["id", "username", "email"],
			},
		})
		return raffles
	}

	static async getRafflesById(raffleId) {
		const raffle = await Raffle.findByPk(raffleId, {
			attributes: ["title", "description", "image", "isActive"],
			include: {
				model: User,
				attributes: ["id", "username"],
			},
		})
		if (!raffle) throw new Error("Rifa no encontrada")
		return raffle
	}

	static async updateRaffle(raffleId, updateData, userId) {
		const raffle = await Raffle.findByPk(raffleId)
		if (!raffle) throw new Error("Rifa no encontrada")

		if (raffle.userId !== userId)
			throw new Error("No tienes permiso para editar esta rifa")

		const allowedFields = ["title", "description", "image", "isActive"]
		allowedFields.forEach((field) => {
			if (updateData[field] !== undefined) {
				raffle[field] = updateData[field]
			}
		})
		await raffle.save()

		return raffle
	}

	static async deleteRaffle(raffleId, userId) {
		const raffle = await Raffle.findByPk(raffleId)

		if (!raffle) throw new Error("Rifa no encontrada")

		if (raffle.userId !== userId) {
			throw new Error("No tienes permiso para eliminar esta rifa")
		}

		const tickets = await raffle.getTickets()
		if (raffle.isActive && tickets.length > 0) {
			throw new Error("No puedes eliminar una rifa activa con participantes")
		}
		await raffle.destroy()
		return { message: "Rifa eliminada correctamente" }
	}
}

module.exports = RaffleController
