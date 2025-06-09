const { DataTypes } = require("sequelize")

module.exports = (database) => {
	database.define("User", {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			defaultValue: DataTypes.INTEGER,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true,
			},
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
		dni: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		birthdate: {
			type: DataTypes.DATE,
			allowNull: false,
		},
	})
}
