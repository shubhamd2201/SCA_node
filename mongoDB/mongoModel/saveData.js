import Emp from "./mongomodel.js";
import mongoose from "mongoose";
import connectDB from "./db.js";
import express from 'express';

connectDB();

let emp1 = new Emp({_id:1, empName:"Shubham", empSalary:50000});
let emp2 = new Emp({_id:2, empName:"Amit", empSalary:30000});
let emp3 = new Emp({_id:4, empName:"Gagan", empSalary:10000});
let emp4 = new Emp({_id:5, empName:"Rahul", empSalary:15000});



// emp2.save().then((emp)=>{
//     console.log(emp+'saved');
// }).catch((err)=>{
//     console.log(`Error in saving emp1 ${err}`);
// });

async function saveData (e){
    try{
        let save_data = await e.save();
        console.log('data saved in mongo DB with async await');
    }catch(err){
        console.log(`Error in saving data in Mongo: ${err}`)
    }
} 
// saveData(emp2);

// in mongo there is two method to save sata .save() this is method of document, and .create() method is method of an model 

async function createData (...data){
    try{
        let save_data = await Emp.create(data);
        console.log('data saved in mongo DB with async await with create Method');
        console.log(save_data);
    }catch(err){
        console.log(`Error in saving data in Mongo: ${err}`)
    }
} 

// createData(emp1, emp2, emp3, emp4);

 

