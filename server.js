const express = require('express')
const app = express()
const port = 3000

app.use(require('./routes/web'))
app.listen(port)