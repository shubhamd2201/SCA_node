const express = require("express");
const morgan = require('morgan');
const server = express();

const port = 8080;
server.use(morgan('default'));
server.use(express.static('public'));



const productController = require('../MVC/controller/product');

//this is POST API to add data
server.post("/products", productController.postProduct);

//this is read GET products
server.get('/products', productController.getAllproduct);

//this is read GET product with id
server.get('/products/:id', productController.getWithprouctId);

// Update PUT  / Products API
server.put('/products/:id', productController.updateProduct);

// patch type => this is also type of update API without overwrite old data 
server.patch('/products/:id', productController.patchProduct);



// delete DELETE  / Products API
server.delete('/products/:id', productController.deleteProduct);



server.use(express.json());






server.listen(port, ()=>{ 
    console.log('server started at port'+port)
});