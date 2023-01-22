const express = require('express')
const router = express.Router()
const productRouter = require('./product')

router.use('/product', productRouter)



module.exports = router