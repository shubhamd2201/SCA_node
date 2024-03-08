const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const server = express();
const path = require("path")
const port = 8080;
const data = fs.readFileSync('./data.json', 'utf-8');
let indexfilepath = path.join(__dirname,"data.json");

let mydata = JSON.parse(data);

server.use(morgan('default'));

server.use(express.static('public'));



// products 
// API ROOT, base URL, like - google.com/api/v2/............


// Create POST  / Products API       C R U D
// server.use(express.json());
// server.post("/products", (req, res)=>{
//     let postapimydata = mydata;
//     postapimydata.products.push(req.body);
//     res.status(201).json(req.body);
// });



//this is read GET products
server.get('/products', (req, res)=>{
    res.json(mydata);
});

//this is read GET product with id
server.get('/products/:id', (req, res)=>{
   let passedid = +req.params.id;
   console.log(passedid);
    res.json(mydata.products[passedid]);
});

// Update PUT  / Products API

// server.put('/products/:id', (req, res)=>{
//  let passedid = req.params.id;
// //  passedid = passedid[1];
//   let updatepIndex = mydata.products.findIndex(e=>{e.id == passedid});
//   console.log(...req.body);
//   let postapimydata = mydata;

//   postapimydata.products.splice(0,1,{...req.body, id:passedid});
// //   having some error here  ^
// //   console.log(mydata.products);
//   res.end('updated');

// });

// patch type => this is also type of update API without overwrite old data 
server.patch('/products/:id', (req, res)=>{
let updatingid = +req.params.id;
console.log(req.params);
// let productindex = mydata.products.findIndex((e)=>{e.id === updatingid});
// let myproducts = mydata.products[productindex];
// console.log(updatingid, productindex, myproducts);
// mydata.products.splice(productindex, 1, {...myproducts, ...req.body});
// console.log(mydata);
res.status(200).json();
});



// delete DELETE  / Products API

server.delete('/products/:id', (req, res)=>{
    let updatingid = +req.params.id;
console.log(req.params);
let productindex = mydata.products.findIndex((e)=> {return e.id == 2});
let myproducts = mydata.products[productindex];
console.log(updatingid, productindex, myproducts);
mydata.products.splice(productindex, 1);
// console.log(mydata);
res.status(200).json(myproducts);

});







server.listen(port, ()=>{ 
    console.log('server started at port'+port)
});