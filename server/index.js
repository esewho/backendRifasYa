const express = require("express")
const { conn } = require("./src/config/database")
const PORT = 3001 || PORT

const server = express()

conn.sync({ alter: true }).then(() => {
	server.listen(PORT, () => {
		console.log(`Servidor escuchando en ${PORT}`)
	})
})
