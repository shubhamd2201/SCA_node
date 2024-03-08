const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const server = express();
const path = require("path")
const port = 8080;
const data = fs.readFileSync('./data.json', 'utf-8');
let indexfilepath = path.join(__dirname,"data.json");

server.use(morgan('default'));

server.use(express.static('public'));

// server.use((req, res, next)=>{
//     console.log(req.method, req.ip, req.hostname);
//     next();
// });

// const auth = (req, res, next)=>{
//     console.log(req.query);
    // if(req.query.password == "123"){
    //     next();

    // }else{
    //     res.sendStatus(401)
    // }
// };








// API end point routs 

server.get('/product:id', (req, res)=>{
    let reqid = req.params.id;
    let mydata = JSON.parse(data);
    // console.log(data);
    // res.json({type:'GET'});
    
    res.json(mydata.products[reqid[1]]);
});
server.get('/', (req, res)=>{
    res.json({type:'GET'});
});



server.get('/demo', (req, res)=>{
     res.sendFile(indexfilepath);
});

server.post('/', (req, res)=>{
    res.json({type:'POST'});
    res.send('i am POST api');
});
server.put('/', (req, res)=>{
    res.json({type:'Update'});
    res.send('i am update API');
});

server.delete('/', (req, res)=>{
    res.json({type:'DELETE'});
    req.send('i am delete API');
})













server.listen(port, ()=>{ 
    console.log('server started at port'+port)
});