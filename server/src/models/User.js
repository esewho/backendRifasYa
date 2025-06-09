const { DataTypes, UUIDV4 } = require("sequelize")

module.exports = (database) => {
	database.define("User", {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: UUIDV4,
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
			allowNull: true,
		},
	})
}
