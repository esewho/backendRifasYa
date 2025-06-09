const { DataTypes } = require("sequelize")

module.exports = (database) => {
	database.define("Ticket", {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUID,
		},
		number: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	})
}
