import http from 'http';
import fsPromises from 'fs/promises';

// async function readHtmlFile (){
//     try{
//         await fsPromises.readFile('./index.html', 'utf-8');
//     }catch(err){
//         throw new Error('error in reading file'+err);
//     }
// }


http.createServer((req,res)=>{
    fsPromises.readFile('./index.html', 'utf-8')
    .then((data)=>{ 
        res.writeHead(200, {'content-Type': 'text/html'});
        res.write(data);
        res.end();
    }).catch((err)=>{
        throw new Error('error in reading file'+ err);
        res.end();
    });

}).listen(8000);
console.log('server started at port 8000');