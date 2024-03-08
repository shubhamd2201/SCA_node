import Emp from "./mongomodel.js";
import connectDB from "./db.js";


connectDB();




const getAll = async()=>{

    try{
        const employees = await Emp.find({},{__v:0}).sort({_id:1});
        return employees;
        
    }catch(err){
        console.log(`Error in rading all Docs: ${err}`);
        return {error:err};
    }
    
}

const postData = async (saveData)=>{
    try{
    let {id, name, salary} = saveData;
    id = Number(id);
    salary = Number(salary);

    let empObj = new Emp ({_id:id, empName:name, empSalary:salary});
    let createdata = await Emp.create(empObj);
    return createdata;
    }catch(err){
        console.log(`Error in Saving the Docs: ${err}`);
        return {error:err};
    }
    
}

const getDatawithParams =  async (passedid)=>{
    let id = Number(passedid);
try{
    let data = await Emp.findOne({_id:id},{__v:0,_id:0});
    if(data == null){
        return null;
    }
    return data;
}catch(err){
    console.log(`Error in Saving the Docs: ${err}`);
    return {error:err};
}
}

const updatedata = async(updateObj)=>{
    let {id, name, salary} = updateObj;
    id = Number(id);
    salary = Number(salary);

    try{
        let updateData = await Emp.updateOne({_id:id,},{$set:{empName:name,empSalary:salary}},{upsert:false});

        let updateid = await Emp.findOne({_id:id});
        if(updateid !== null){
            console.log(updateObj);
            return {updateData};
        }else{
                console.log('record not found');
                return({error:'Record not found'}); 
            }
        

        
    }catch(err){
        console.log(err);
        return ({error:err});
    }

}

const deleteData =async (id)=>{
   try{
    let this_id = Number(id);

    let deleteddata = await Emp.deleteOne({_id:this_id});
    
    let deletedid = await Emp.findOne({_id:this_id});
    if(deleteddata.deletedCount == 0){
        console.log('record not found');
        return({error:'Record not found'}); 
    }else{
            return {data:await Emp.find({}).sort({_id:1})};
        }
   }catch(err){
        return ({error:err})
   }
    
    
}

export {getAll, postData, getDatawithParams,updatedata, deleteData}