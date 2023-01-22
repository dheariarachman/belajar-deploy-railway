const mongoose = require('mongoose')
mongoose.set('strictQuery', true);

mongoose.connect('mongodb://an0709:123123@localhost:27017/listProduct?authSource=admin')

const db = mongoose.connection
db.on('error', () => console.log('conection error'))
db.once('open', () => console.log('Success connected'))