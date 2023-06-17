const mongoose=require("mongoose");
const client=mongoose.connect('mongodb://0.0.0.0:27017/TaskManager');
const { Schema } = mongoose;
mongoose.Promise = global.Promise;
const Task=(id)=>
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
  const coll="user"+id
  
  return mongoose.models.coll || mongoose.model("user"+id,taskSchema);
  
 }
 module.exports={Task}