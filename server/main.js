const { conn } = require("./src/config/database")
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const routes = require("../server/routes")

const PORT = 3001 || PORT

const server = express()
server.use(morgan("dev"))
server.use(express.json())
server.use("/", routes)
server.use(cors())

conn.sync({ force: true }).then(() => {
	server.listen(PORT, () => {
		console.log(`Servidor escuchando en ${PORT}`)
	})
})
