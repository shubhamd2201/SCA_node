import express from "express";
let app = express();

const logger1 = (req, res, next)=>{
    console.log(`i am logger1`);
    next();
};
const logger2 = (req, res, next)=>{
    console.log(`i am logger2`);
    next();
};

app.use(logger1, logger2);

app.get('/' ,  (req, res)=>{
    res.send("you send a get request");
});
app.post('/', (req, res)=>{
    res.send('you send post request');
})

let server = app.listen(8080, ()=>{
    console.log(`Server started at port ${server.address().port}`);
});