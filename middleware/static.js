import express from "express";
import { fileURLToPath } from 'url';
import path from "path";
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let app = express();

app.use(express.static('public'));

let indexfilepath = path.join(__dirname, 'public/html/index.html');

app.get('/static',  (req, res)=>{
    res.sendFile(indexfilepath);
});


let server = app.listen(8080, ()=>{
    console.log(`Server started on port ${server.address().port}`);
});