import express from "express";
let app = express();

const logger = (req, res, next)=>{
    let now = new Date();
    let timestampt = `${now.toDateString()} at ${now.toLocaleTimeString()}`
    req.times = timestampt;
    console.log(' i am main logger');
    // console.log(req.headers);
    next();
};

const logger1 = (req, res, next)=>{console.log(`i am extra middleware`); next();}

app.use(logger); // i am universal middleware because you pass me in use and didn't route me 


// use logger in a specific request or routing just use it as 2and argumnet of your routing 

app.get('/', (req, res)=>{
    res.send(`you sent a ${req.method} request at ${req.times}`);
});

app.get('/product',logger1, (req, res)=>{
    res.send(`i am  ${req.method} request at with logger 1`);
});

app.post('/product', (req, res)=>{
    res.send(`you sent a  ${req.method} request at ${req.times}`);

});


let server = app.listen(8080, ()=>{
    console.log(`Server started at port ${server.address().port}`);
});
