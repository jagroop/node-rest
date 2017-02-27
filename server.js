'use strict'

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('./routes/web'))

app.listen(port, (err) => {
	if(err) throw err
	console.log(`NodeJS Server is running at localhost:${port}`)
})