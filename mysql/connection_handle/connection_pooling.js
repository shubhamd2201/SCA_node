import mysql from 'mysql';

const poollingDB = mysql.createPool({
    connectionLimit:10,
    user:'root',
    password:'admin@123', 
    host:'localhost', 
    database:'collagedb'});

export default poollingDB;
