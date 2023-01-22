const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

require('./config/mongooseConnection')
const routerV1 = require('./routes/index')
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded ({extended: true}))
app.use(bodyParser.json())
app.use('/api', routerV1)



app.listen(3005)