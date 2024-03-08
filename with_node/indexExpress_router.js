const express = require('express');
const morgan = require('morgan');
const server = express();
const port = 8080;
const productRouter = require('../Routes/productRouter');




// this is body parser 
server.use(express.json());
server.use(morgan('default'));
server.use(express.static('public'));

// const router = express.Router();
// here we can use a middleware to route a sever 
server.use('./api', productRouter.Router); // with this we redirect our all api path like domainname/api/product




// // this is we import module from MVC controller 
// const productController = require('./MVC/controller/product');

// here we can chain API on server 
// server
// .post("/products", productController.postProduct)
// .get('/products', productController.getAllproduct)
// .get('/products/:id', productController.getWithprouctId)
// .put('/products/:id', productController.updateProduct)
// .patch('/products/:id', productController.patchProduct)
// .delete('/products/:id', productController.deleteProduct);









server.listen(port, ()=>{ 
    console.log('server started at port'+port)
});