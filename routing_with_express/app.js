import express from 'express';
import {router} from './routes.js';

const app = express();

app.use(express.json());
app.use('/api/products', router);

let server = app.listen(8080, ()=>{
    console.log(`server started at port : ${server.address().port}`)
});