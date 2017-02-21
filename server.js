const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(require('./routes/web'))

app.listen(port, (err) => {
	if(err) throw err
	console.log(`NodeJS Server is running at localhost:${port}`)
})