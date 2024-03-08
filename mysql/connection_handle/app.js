
import poollingDB from "./connection_pooling.js";
import express from 'express';

let app = express();


app.get('/', (req, res)=>{

    poollingDB.getConnection((err, connection)=>{
        if(err){
            console.log(`Error: ${err}`);
            throw err;
        }
        console.log('connected to DB');

        connection.query('select * from students', (error, results)=>{
            connection.release();
            console.log('connection released');
            if(error){
                res.status(500).send({error: error.sqlMessage});
                return;
            }
            return res.send({payload:results});
        })
    })

});

let server = app.listen(8080, ()=>{
    console.log(`server started at http://localhost/${server.address().port}`);
});