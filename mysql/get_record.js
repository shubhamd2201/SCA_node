import express from "express";
import mysql from 'mysql';

let app = express();
const connection = mysql.createConnection({user: 'root', password:"admin@123",database:'collagedb', host:'localhost', });

app.set('view-engine', 'ejs');
app.use(express.static('public'));

connection.connect((err)=>{
    if(err){
        console.log(`Error:${err}`);
        throw err;
    }
    console.log('Connected to DB');
});



app.get('/api/students', (req, res)=>{

    try{
        connection.query('select * from students', (err, results)=>{
            if(err){
                console.log('Error in fetching Table'+err);
                res.send(400).send('Error in fetching data');
                return;
            };
            // results.forEach(e=>{
            //     let {roll_no, sname, per} = e;
               
            // });
            res.send({payload:results});
            return;
        });
    }catch(err){
        res.send(err);
    }
});

app.get('/', (req, res)=>{

    connection.query('select * from students', (err, results)=>{
        if(err){
            console.log('Error in fetching table');
            res.render('index.ejs', {status:false,sqlerror:err.sqlMessage});
            return;
        }
        res.render('index.ejs', {status:true,studentdata:results});
        return;
    });

});
app.get('/api/studentdata/:id', (req, res)=>{

let studentid = Number(req.params.id);

    connection.query(`select * from students where roll_no=?`, [studenti], (err, results)=>{
        if(err){
            res.status(500).send(`student roll no ${studentid} is not exist`);
            return;
        }
        res.render('index.ejs', {status:true,studentdata:results});

    });
});


// this is with prevent from sql injection use plcaholder
app.get('/api/studentd', (req, res)=>{

    let lowper = Number(req.query.lowper);
    let highper = Number(req.query.highper);
    console.log(lowper, highper);

    
        connection.query(`select * from students where roll_no between ? and ?`,[lowper, highper], (err, results)=>{
            if(err){
                res.status(500).send(`student between ${lowper} and ${highper} not found`);
                return;
            }
            res.send(results);
        });

    });


let server = app.listen(8080, ()=>{
    console.log(`Server started at port : ${server.address().port}`);
});