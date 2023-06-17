const mongoose=require("mongoose");
const Schema = mongoose.Schema;
const client=mongoose.connect('mongodb://0.0.0.0:27017/TaskManager');

const UserSchema = new Schema({
    mail:String,
    password:String
   },
    {versionKey: false}
  );
  
  const user=mongoose.model("users",UserSchema);
  
  module.exports=user;