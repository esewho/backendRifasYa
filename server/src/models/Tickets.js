const { DataTypes, UUIDV4 } = require("sequelize")

module.exports = (database) => {
	database.define("Ticket", {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: UUIDV4,
		},
		number: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	})
}
