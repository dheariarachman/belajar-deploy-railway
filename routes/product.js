const express = require('express')
const router = express.Router()
// const multer = require('multer')
// const upload = multer({dest: "uploads/"})
const productController = require('../controller/productController')

router.get('/', productController.getProduct)
router.get('/:id', productController.getProductByid)
router.delete('/:id', productController.deleteProduct)
// router.post('/', upload.single('image_url'), productController.createProduct)
router.post('/', productController.createProduct)
router.put('/:id', productController.updateProduct)
// router.put('/', upload.single('image_url'), productController.updateProduct)

module.exports = router