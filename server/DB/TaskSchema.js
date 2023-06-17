const mongoose=require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    taskName:String,
    date:String,
    time1:String,
    time2:String,
    important:Boolean,
    desc:String,
    tags:String,
    type:Boolean,
    user:String
   },
    {versionKey: false}
  );
  
  const task=mongoose.model("tasks",taskSchema);
  
  module.exports=task;