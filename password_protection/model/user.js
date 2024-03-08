import mongoose from "mongoose";
import Joi from "joi";

let userSchema = mongoose.Schema({
    firstname:{type:String, required:true, minlength:4, maxlength:50},
    lastname:{type:String, required:true, minlegth:4, maxlength:50},
    email:{type:String, unique:true, minlegth:5, maxlength:50}, 
    password:{type:String, required:true, minlegth:5,maxlength:1024}});




function ValidateUser (userObj){
    let joiValidation = Joi.object(
        {firstname:Joi.string().min(5).max(50).required()},
        {lastname:Joi.string().min(5).max(50).required()},
        {email:Joi.string().min(5).max(50).required()});

        let {error} = joiValidation.validate(userObj);

        return error;
        
}

let user = mongoose.model('user', userSchema);




export {ValidateUser, user};