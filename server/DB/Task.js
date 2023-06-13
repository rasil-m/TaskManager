const mongoose=require("mongoose");
const Schema = mongoose.Schema;
const Task=()=>
 {

const taskSchema = new Schema({
    taskName:String,
    date:String,
    time1:String,
    time2:String,
    important:Boolean,
    desc:String,
    tags:String,
    type:Boolean
   },
    {versionKey: false}
  );
  
  const task=mongoose.model("tas",taskSchema);
  return task;
 }
 module.exports={Task}