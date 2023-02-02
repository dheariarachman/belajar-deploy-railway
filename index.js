const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

require('./config/mongooseConnection')
require('dotenv').config()
const PORT = process.env.PORT || 3000
const routerV1 = require('./routes/index')
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded ({extended: true}))
app.use(bodyParser.json())
app.use('/api', routerV1)



app.listen(PORT);