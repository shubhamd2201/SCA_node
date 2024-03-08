// import { number, string } from "joi";
import mongoose from "mongoose";
let mongourl = 'mongodb://127.0.0.1:27017/testdb';

// mongoose.connect(mongourl).then((connection)=>{
//     console.log('database connected');
// }).catch((err)=>{
//     console.log('error in connection data base ');
//     console.log(err);
// });

 async function connectToMongo(){
    try{
      let mongoconnection = await mongoose.connect(mongourl);
        console.log('database connected');
        console.log(`connnected to Mongo: ${mongoconnection.connection.host}`);


    }catch(err){
        console.log('error in connecting data base'+err);
    }
 }
 connectToMongo();

