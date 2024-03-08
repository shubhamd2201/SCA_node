import http from 'http';

let books = [{bookName : "node js", price: 400, autherName: "shubham dubey"}, {bookName : "intro to node", price: 300, autherName: "shubham"}];
let authors = [{authorName: "shubham", country: "india"}, {authorName: "dubey", country: "US"}];



http.createServer((req, res)=>{
    console.log(`your requested ${req.url}`);
    res.writeHead(200, {"content-Type": 'application/json'});

    switch(req.url){
        case('/books'):
            res.end(JSON.stringify(books));
            break;
        case('/authors'):
            res.end(JSON.stringify(authors));
            break;
        default:
            // res.writeHead(404, {"content-Type": 'application/json'});
            res.end(JSON.stringify([{Error:"requested url not found"}]));  
    }

}).listen(8000);
console.log('server started at port 8000');