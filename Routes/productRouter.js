const express = require('express');

// this is we import module from MVC controller 
const productController = require('../MVC/controller/product');

const productRouter = express.Router();




// Routing with express on /api path
productRouter
.post("/", productController.postProduct)
.get('/', productController.getAllproduct)
.get('/:id', productController.getWithprouctId)
.put('/:id', productController.updateProduct)
.patch('/:id', productController.patchProduct)
.delete('/:id', productController.deleteProduct);

exports.Router = productRouter;