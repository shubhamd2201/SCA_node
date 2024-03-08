import express from "express";
import mysql from 'mysql';
let app = express();


app.set('view-engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());




app.get('/', (req, res)=>{

    const connection = mysql.createConnection({user: 'root', password:"admin@123",database:'collagedb', host:'localhost', });
    connection.connect((err)=>{
        if(err){
            console.log(`Error:${err}`);
            throw err;
        }
        console.log('Connected to DB');
    });


    connection.query('select * from students', (err, results)=>{
        if(err){
            console.log('Error in fetching table');
            res.render('index.ejs', {status:false,sqlerror:err.sqlMessage});
           
        }
        else{
            res.render('index.ejs', {status:true,studentdata:results});
        }
        connection.end();
        console.log('DB disconnected');
        
    });

});
app.use(function(req, res, next) {
    res.status(404).send("Oops! The page you're looking for does not exist.");
}); 

let server = app.listen(8080, ()=>{
    console.log(`Server started at port : ${server.address().port}`);
});