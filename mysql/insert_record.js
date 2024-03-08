import express from "express";
import mysql from 'mysql';

let app = express();
let connection = mysql.createConnection({user:'root', password:'admin@123', host:'localhost', database:'collagedb'});

app.use(express.json());
app.set('view-engine', 'ejs');
app.use(express.static('public'));

connection.connect((err)=>{
    if(err){
        console.log(`Error in connection in DB`);
        throw err;
    }
    console.log('Database connected');
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

app.post('/api/enterstudentdata', (req, res)=>{
    console.log(req.body);
let {roll_no, s_name, per} = req.body;

    roll_no = Number(roll_no);
    per = Number(per);

        connection.query('insert into students values(?,?,?)', [roll_no, s_name, per], (err, results)=>{
            if(err){
                return res.status(500).send(`Error in inserting data ${err}`);
            }
            res.send({message: "student added", sroll_no: roll_no});
            return;
        });
});



let server = app.listen(8080, ()=>{
    console.log(`server started at port ${server.address().port}`);
});

