import Emp from "./mongomodel.js";
import mongoose from "mongoose";
import connectDB from "./db.js";
import express from 'express';


connectDB();


// Emp.find({}).then((data)=>{
//     console.log('data is :')
//     console.log(data);
// }).catch((err)=>{
//     console.log('error is:'+err);
// });


async function findData(){
try{
    let data = await Emp.find({},{_id:0, empName:1, empSalary:1,});
    console.log(`total record length is ${data.length}`);
    // console.log(`data is \n ${data}`);
    data.forEach((e)=>{
        console.log(`employee Name is ${e.empName} and salary is ${e.empSalary}`);
    });
}catch(err){
    console.log(`Error in data find: ${err}`);
}

}
findData();
 

