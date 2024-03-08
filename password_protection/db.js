
import mongoose from "mongoose";

async function connectDB(){
    try{
        let cont = await mongoose.connect('mongodb://127.0.0.1:27017/empDB');
        console.log('DB connected');
        console.log(`Db connected at host: ${cont.connection.host}`);
    }catch(err){
        console.log(`error on connection DB ${err}`);
    }
}

export default connectDB;