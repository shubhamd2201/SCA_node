import express from "express";
import morgan from "morgan";
import helmet from "helmet";



let app = express();

let morganLogger = morgan('this is :method method with this- :url url and status code is - :status');

app.get('/morgan' ,morganLogger,  (req, res)=>{
    res.send('i am get with morgan');
});

app.get('/helmet',helmet(), (req, res)=>{
    res.send('i am get with helmet');
});

let server = app.listen(8080, ()=>{
    console.log(`Server started on port ${server.address().port}`);
});