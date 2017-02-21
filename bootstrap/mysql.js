const mysql = require('mysql')
const config = require('./../config/database')

const connection = mysql.createConnection(config)
connection.connect()
module.exports = connection