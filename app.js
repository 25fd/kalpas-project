const express = require("express")
const app = express()
const upload = require("express-fileupload")
var cors = require('cors')
const noteRoute = require('./routes/noteRoutes')
const uploadRoutes = require('./routes/uploadRoutes')
const winston = require('winston')
const consoleTransport = new winston.transports.Console()
const myWinstonOptions = {
    transports: [consoleTransport]
}
const logger = new winston.createLogger(myWinstonOptions)

function logRequest(req, res, next) {
    logger.info(req.method)
    next()
}

app.use(logRequest)
app.use(upload())
app.use(express.json())

function logError(err, req, res, next) {
    logger.error(err)
    next()
}

app.use(logError)


app.use(cors())
app.use("/api/v1/note",noteRoute)
app.use("/test",uploadRoutes)
//check
module.exports = app
