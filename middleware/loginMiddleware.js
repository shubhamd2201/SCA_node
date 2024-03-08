import express from "express";
let app = express();

let products = [
    {id:1, name:"iphone", price:"50000"},
    {id:2, name:"iqoo", price:"50000"},
    {id:3, name:"oneplus", price:"40000"},
    {id:4, name:"tata", price:"800000"},
    {id:5, name:"maruti", price:"400000"},

];

app.use(express.json());

const logger = (req, res, next)=>{
    let now = new Date();
    let timestampt = `${now.toDateString()} at ${now.toLocaleTimeString()}`
    req.times = timestampt;
    console.log(' i am main logger');
    // console.log(req.headers);
    next();
};

const protect = (req, res, next)=>{
    let usedetails = {
        name: "shubham",
        pwd:"admin123",
        isloggedIn: true,
    };

    if(usedetails.isloggedIn){
        next();
    }
    else{
        res.json("you must be logged in");
        return;
    }
    }

app.get('/', (req, res)=>{
    res.send(`you sent a ${req.method} request at ${req.times}`);
});

app.get('/api/product',protect, (req, res)=>{
    res.send(JSON.stringify(products));
});

app.post('/product',protect, (req, res)=>{
    res.send(JSON.stringify(products));
});
app.delete('/api/product/:id',protect, (req, res)=>{

    let productid = req.params.id;
    let productToDelete = products.find(e=>{
        return e.id == productid;
    });

    if(!productToDelete){
        res.status(400).send('product is not available');
        return;
    }
    products.splice(productToDelete, 1);

    res.send(JSON.stringify(productToDelete));

});


let server = app.listen(8080, ()=>{
    console.log(`Server started at port ${server.address().port}`);
});
