import express from "express";
import Joi from "joi";
let app = express();

let products = [{id:1, name:"iphone",price:1000}, {id:2, name:"iphone",price:1000}];


app.use(express.json());

app.put('/api/product/:id',async (req, res)=>{
    let thisid = Number(req.params.id);
    let newproduct = req.body;
    let editableobj = products.find(e=>{
        return e.id === thisid;
    });

    if(!editableobj){
        res.status(400).send('product not found');
        return;
    };

    const schema = Joi.object({name: Joi.string().max(100),
                               price: Joi.number().integer().min(20000)});
   
    let {error} =  schema.validate(newproduct);


    if(error){
        let errormsg = error.details[0].message;
        res.status(400).send(errormsg);

        return;
    };
    
    editableobj.name = newproduct.name;
    editableobj.price = newproduct.price;


    res.send(products);
  


});

let server = app.listen(8080, ()=>{
    console.log(`server started at port ${server.address().port}`);
});