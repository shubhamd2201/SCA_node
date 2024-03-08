import mongoose from "mongoose";

async function connectDB(){
    try{
        let cont = await mongoose.connect('mongodb://127.0.0.1:27017/empDB');
        console.log('connected DB');
        console.log('connected DB at Mongo:'+cont.connection.host);
    }catch(err){
        console.log(`error on connection DB ${err}`);
    }
};
export default connectDB;
