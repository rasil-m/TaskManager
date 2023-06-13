let user=require("./UserSchema");
const mongoose=require("mongoose");
const Schema = mongoose.Schema;
const client=mongoose.connect('mongodb://0.0.0.0:27017/TaskManager');
const fetchOne=async(mail)=>
 {
   const data=await user.findOne({mail:mail})
   
   if(data)
    return true
   else
    return false
   

 }

module.exports={fetchOne}