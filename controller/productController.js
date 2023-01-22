const Product = require('../model/productModel')
// const path = require('path')
// const fs = require('fs')

const getProduct = (req, res) => {
    Product.find()
    .then(result => 
        res.send({
            status : 200,
            message: 'Get Method Success',
            data : result
        })
    ).catch(error => 
        res.send({message : error.message})
    )
}
const getProductByid = (req, res) => {
    Product.findById(req.params.id)
    .then(result => 
        res.send({
            status : 200,
            message: 'Get By id Method Success',
            data : result
        })
    ).catch(error => 
        res.send({message : error.message})
    )
}

const createProduct =  (req, res) => {
    const {name, price,description, stock, status} = req.body;
    // const image = req.file
    // if(image){
    //     const target = path.join(__dirname, '../uploads', image.originalname)
    //     fs.renameSync(image.path, target)
    // }
    Product.create({name, price,description, stock, status})
    
    .then(
        result => 
                    res.send({
                        status : 201,
        message: 'Post Method Success',
        data : result
                    })
    ).catch(error => 
        res.send({
         status : 500,
         message: error.message
        })
    )    
}
const updateProduct =  (req, res) => {
    const {name, price,description, stock, status} = req.body;
    // const image = req.file
    const id = req.params.id
    // if(image){
    //     const target = path.join(__dirname, '../uploads', image.originalname)
    //     fs.renameSync(image.path, target)
        
    // }
    Product.updateOne({_id : id}, {$set:{name, price,description, stock}})
    .then(
        result => 
                    res.send({
                        status : 200,
        message: 'Put Method Success',
        data : result
                    })
    ).catch(error => 
        res.send({
         status : 500,
         message: error.message
        })
    )    
}
const deleteProduct = (req, res) => {
    const id = req.params.id
    Product.deleteOne({_id : id})
    .then(result => 
        res.send({
            status : 200,
            message: 'Delete Method Success',
            data : result
        })
    ).catch(error => 
        res.send({message : error.message})
    )
}

module.exports = {
    createProduct,
    getProduct,
    getProductByid,
    updateProduct,
    deleteProduct
}