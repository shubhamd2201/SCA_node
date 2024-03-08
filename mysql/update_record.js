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

app.put('/api/editstudentdata', (req, res)=>{
    console.log(req.body);
let {roll_no, s_name, per} = req.body;

    roll_no = Number(roll_no);
    per = Number(per);

        connection.query('update students set sname=?, per=? where roll_no=?', [s_name, per, roll_no], (err, results)=>{
            if(err){
                return res.status(500).send(`Error in updating data ${err}`);
            }
            if(results.affectedRows === 0){
                return res.status(400).send({error:`record of Roll no ${roll_no} not found`});
            }
            console.log(results)
            res.send({message: "student updated", data:{rollnum: roll_no, sname: s_name, percentage: per}});
            return;
        });
});



let server = app.listen(8080, ()=>{
    console.log(`server started at port ${server.address().port}`);
});

