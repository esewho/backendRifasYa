const { DataTypes } = require("sequelize")

module.exports = (database) => {
	database.define("Raffle", {
		id: {
			type: DataTypes.UUIDV4,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
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
	})
}
