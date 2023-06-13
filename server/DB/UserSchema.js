const mongoose=require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    mail:String,
    password:String
   },
    {versionKey: false}
  );
  
  const user=mongoose.model("users",UserSchema);
  
  module.exports=user;