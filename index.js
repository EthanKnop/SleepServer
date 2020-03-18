const express = require('express')
const app = express()

const port = 3001

app.use(express.json())
const router = require('./routes')
app.use('/', router)

app.listen(port, () => console.log('server started'))
