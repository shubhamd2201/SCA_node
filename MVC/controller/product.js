
const fs = require('fs');

const path = require("path")
const data = fs.readFileSync('./data.json', 'utf-8');
let indexfilepath = path.join(__dirname,"data.json");
let mydata = JSON.parse(data);





// products 
// API ROOT, base URL, like - google.com/api/v2/............


// Create POST  / Products API       C R U D
exports.getAllproduct =  (req, res)=>{
    res.json(mydata);
};

exports.getWithprouctId = (req, res)=>{
                        let passedid = +req.params.id;
                        console.log(passedid);
                        res.json(mydata.products[passedid]);
 };

 exports.postProduct = (req, res)=>{
                        let postapimydata = mydata;
                        postapimydata.products.push(req.body);
                        res.status(201).json(req.body);
};


exports.updateProduct = (req, res)=>{
                            let passedid = req.params.id;
                        //  passedid = passedid[1];
                            let updatepIndex = mydata.products.findIndex(e=>{e.id == passedid});
                            console.log(...req.body);
                            let postapimydata = mydata;
                        
                            postapimydata.products.splice(0,1,{...req.body, id:passedid});
                        //   having some error here  ^
                        //   console.log(mydata.products);
                            res.end('updated');
                        
   };

   exports.patchProduct = (req, res)=>{
                        let updatingid = +req.params.id;
                        console.log(req.params);
                        let productindex = mydata.products.findIndex((e)=>{e.id === updatingid});
                        let myproducts = mydata.products[productindex];
                        console.log(updatingid, productindex, myproducts);
                        mydata.products.splice(productindex, 1, {...myproducts, ...req.body});
                        console.log(mydata);
                        res.status(200).json();
    };

    exports.deleteProduct = (req, res)=>{
                        let updatingid = +req.params.id;
                        console.log(req.params);
                        let productindex = mydata.products.findIndex((e)=> {return e.id == 2});
                        let myproducts = mydata.products[productindex];
                        console.log(updatingid, productindex, myproducts);
                        mydata.products.splice(productindex, 1);
                        // console.log(mydata);
                        res.status(200).json(myproducts);
                        
    };



