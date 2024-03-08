import  express from "express";
import Path from "path";
import Joi from "joi";
const app = express();

app.use(express.urlencoded({extended:false})); //this is middleware
app.use(express.json()); //this is middleware


app.post('/products',(req, res)=>{
    const schema  = Joi.object({name:Joi.string().min(3).required(),
                                price: Joi.number().integer().min(20000).required()});

    let product = req.body;

    const {error} = schema.validate(product);
    if(error){
        let str = error.details[0].message;
        res.status(400).send(str);
    }
    res.send(req.body);
});

let server = app.listen(8080, ()=>{
    console.log(`server started at port ${server.address().port}`);
});