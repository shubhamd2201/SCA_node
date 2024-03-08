import express from 'express';
import Joi from 'joi' 
let app = express();

let products = [{id:1, name:"iphone",price:1000}, {id:2, name:"iphone",price:1000}];

app.use(express.json());

app.delete('/api/delete/product/:id', (req, res)=>{
    let deletedid = Number(req.params.id);

    let deletedProduct = products.find(e=>{
        return e.id === deletedid;
    });
    let indexof = products.indexOf(deletedProduct);

    console.log(indexof)

    if(!deletedProduct){
        res.status(400).send('Product does not exist');
        return;
    }

    products.splice(indexof, 1);
    res.send(products);
});

let server = app.listen(8080, ()=>{
    console.log(`server started at port ${server.address().port}`)
})