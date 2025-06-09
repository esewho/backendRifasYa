const { DataTypes } = require("sequelize")

module.exports = (database) => {
	database.define("Raffle", {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUID,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		pricePerTicket: {
			type: DataTypes.FLOAT,
			allowNull: false,
			validate: {
				min: 0,
			},
		},
		maxTickets: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		endDate: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		isActive: {
			type: DataTypes.BOOLEAN,
			defaultValue: true,
		},
		// models/Raffle.js
		userId: {
			type: DataTypes.INTEGER,
			references: {
				model: "Users",
				key: "id",
			},
		},
	})
}
