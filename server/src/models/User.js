const { DataTypes } = require("sequelize")

module.exports = (database) => {
	database.define("User", {
		id: {
			type: DataTypes.UUIDV4,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		accountType: {
			type: DataTypes.ENUM("cliente", "creador"),
			allowNull: true,
		},
		image: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	})
}
