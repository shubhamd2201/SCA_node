import express from "express";
let app = express();

const logger = (req, res, next)=>{
    console.log(`a ${req.method} request arrived...! at ${req.originalUrl}`);
    next();
};
app.use(logger);

app.get('/home', (req, res)=>{
    res.send('i am get req')
});

app.post('/product', (req, res)=>{
    res.send('i am post req');
});





let server = app.listen(8080, ()=>{
    console.log(`Server started at port ${server.address().port}`);
});
