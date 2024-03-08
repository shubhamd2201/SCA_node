

const fs = require('fs');
const index = fs.readFileSync('index.html','utf-8');
const data = fs.readFileSync('data.json','utf-8');
let pid;

require('http').createServer((req, res) => {
    let ids = req.url.split("/");
    pid = ids[3];
   let mydata =  JSON.parse(data);
    switch(req.url){
        case('/'):{res.setHeader('Content-Type', 'text/html');
                res.end(index);}
            break;
        case('/api'):{res.setHeader('Content-Type', 'application/json');
            res.end(data)};
            break;
        case('/api/product/'+pid):{res.setHeader('Content-Type', 'text/html');};
            let thisdata = JSON.stringify(mydata.products[pid - 1]);
            let modifiedindex = index.replace('**title**', mydata.products[pid - 1].title).replace('**imgsrc**', mydata.products[pid - 1].thumbnail);
            res.end(modifiedindex);
            break;
        default:res.writeHead(404, 'NOT found');
            res.end("i am not found page");
    };
}).listen(3000);