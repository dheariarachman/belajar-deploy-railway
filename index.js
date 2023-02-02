const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

require('./config/mongooseConnection')
require('dotenv').config()
const PORT = process.env.PORT || 3000
const routerV1 = require('./routes/index')
const routerProduct = require('./routes/product')
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded ({extended: true}))
app.use(bodyParser.json())
app.get('/', (req, res) =>{
    res.send("hello world")
})
app.use('/product', routerProduct)



app.listen(`0.0.0.0:${PORT}`);