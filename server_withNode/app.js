import http from 'http';


const requestListner = (req, res)=>{
    res.setHeader("content-Type" , "text/html");
    res.statusCode = 200;
    // res.writeHead(200, {"content-Type" : "text/plain"});
    res.write('./index.html');
    res.end();
    console.log('user arrived')
}
const server = http.createServer(requestListner);
server.listen(8080);

console.log('server started and listenning at port 8080');