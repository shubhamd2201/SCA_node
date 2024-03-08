import express, { json } from 'express';
import path from 'path';
import Joi from 'joi';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


let homefilepath = path.join(__dirname, 'index.html');
let conversionfilepath = path.join(__dirname, 'conversion.html');

let checkForJson = (req, res, next)=>{
    console.log(req.headers);
    if(req.headers['content-type'] != "application/json"){
        res.status(400).send({"error":"server require data in json"});
        return
    }
    next();
};

let app = express();

app.use(express.json());

app.get('/', (req, res)=>{
    res.sendFile(homefilepath);
});

app.post("/data", checkForJson, (req, res)=>{
    let data = req.body;

    const schema = Joi.object({number1: Joi.number().integer().required(),number2: Joi.number().integer().required()});

    let {error} = schema.validate(data);
    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }
    let sumofData = Number(data.number1) + Number(data.number2);
    res.send(JSON.stringify({finaldata: sumofData}));
});

app.get('/conversion', (req, res)=>{
    res.sendFile(conversionfilepath);
});
app.post("/conversion/data", checkForJson, (req, res)=>{
    let data = req.body;

    const schema = Joi.object({amount:Joi.number().integer().required(), convertTo:Joi.string().min(2).required()});

    let{error} = schema.validate(data);
    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }
    let finalcrr = {};
    if(data.convertTo == "ind"){
        finalcrr.finalcr = ( Number(data.amount)/1).toFixed(2);
        finalcrr.symbol = "rs";
    }
    else if(data.convertTo == "us"){
        finalcrr.finalcr =  (Number(data.amount)/83).toFixed(2);
        finalcrr.symbol = "dollar";

    }
    else if(data.convertTo == "eu"){
        finalcrr.finalcr =  (Number(data.amount/90)).toFixed(2);
        finalcrr.symbol = "euro";

    }

    res.send(JSON.stringify(finalcrr));



})


let server = app.listen(8080, ()=>{
    console.log(`server started at port ${server.address().port}`);
});