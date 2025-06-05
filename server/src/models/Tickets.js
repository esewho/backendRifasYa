const { DataTypes } = require("sequelize")

module.exports = (database) => {
	database.define("Ticket", {
		id: {
			type: DataTypes.UUIDV4,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
		},
		number: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	})
}
