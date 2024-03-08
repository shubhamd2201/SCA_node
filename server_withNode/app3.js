import http from "http";

let weather ={city:"bhopal",temp:"20℃", forecast:"sunny"};
let weatherJSON = JSON.stringify(weather);

http.createServer((req, res)=>{
    res.writeHead(200, {'content-Type':"application/json"});
    res.end(weatherJSON);
}).listen(8000);
console.log('server started and listning at port 8000');