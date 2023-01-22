const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name:{
        type : String,
        required: [true, 'field name harus diisi'],
        minlength: 3,
        maxlength: 50
    },
    price:{
        type : Number,
        required: true,
        min : 1000,
        max : 100000000
    },
    stock : {
        type : Number,
        required : true
    },
    description :{
        type : String
    },
    status : {
        type : Boolean,
        default: true
    },
    image_url:{
        type: String
    }
})


const Product = mongoose.model('Products', productSchema)
module.exports = Product