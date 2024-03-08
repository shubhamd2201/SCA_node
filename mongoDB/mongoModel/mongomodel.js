import mongoose from "mongoose";

 let empschema = new mongoose.Schema({_id:Number, empName:{type:String, required:true, minlength:5}, empSalary: {type:Number, validate:{validator:(v)=>{return v>=20000 && v<= 70000}}}});

 let Emp = mongoose.model('Empcollection', empschema);

 export default Emp;
