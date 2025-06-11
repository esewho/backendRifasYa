const { DataTypes, UUIDV4 } = require("sequelize")

module.exports = (database) => {
	database.define("Ticket", {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: UUIDV4,
		},
		userId: {
			type: DataTypes.UUID,
			allowNull: false,
		},
		raffleId: {
			type: DataTypes.UUID,
			allowNull: true,
		},
		used: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
	})
}
