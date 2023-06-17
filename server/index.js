const express=require("express");
const cors = require('cors');
const app=express();
const mongoose=require("mongoose");
mongoose.connect('mongodb://0.0.0.0:27017/TaskManager');
app.use(cors());
const bodyParser=require("body-parser");
const jsonParser = bodyParser.json();
const Taskschema=require("./DB/TaskSchema")
const User=require("./DB/UserSchema")
const Task=require("./DB/Task")
const UserExist=require("./DB/UserExist")
const bcrypt = require('bcrypt');
const client=mongoose.connect('mongodb://0.0.0.0:27017/TaskManager');


app.post("/addTask",jsonParser,async(req,res)=>{
   
    const Data=new Taskschema(req.body);
    //const Data1=await Task.Task(req.body.id);
    //const Data=new Data1(req.body);
    Data.save().then(()=>{ res.send("true")})
})

app.get("/fetchData/:id",async(req,res)=>{

    let data=await Taskschema.find({user:req.params.id})
    //const data=await Task.Task(req.params.id).find();
    res.send(data)

})

app.delete("/deleteData/:key/:id",async(req,res)=>{
    await Taskschema.deleteOne({_id:req.params.key,user:req.params.id})
    res.send(true)
})

app.get("/fetchOne/:key/:id",async(req,res)=>{

     let data=await Taskschema.findOne({_id:req.params.key,user:req.params.id})
     res.send(data)

})

app.put("/UpdateTask",jsonParser,async(req,res)=>{

    const data=await Taskschema.updateOne(
        {_id:req.body._id},{
        $set:req.body
    
    }
    
    )
    res.send(data.acknowledged)

})

app.get("/fetchCategory/:key",async(req,res)=>{

    let data=await Taskschema.find({tags:req.params.key})

    res.send(data)

})

app.get("/fetchImp",async(req,res)=>{

    let data=await Taskschema.find({important:true})

    res.send(data)
})

app.post("/signUp",jsonParser,async(req,res)=>{

    const usr=UserExist.fetchOne(req.body.mail)

    usr.then((r)=>{
      
      if(!r)
      {
        const myPlaintextPassword=req.body.password

        bcrypt.hash(myPlaintextPassword,10, function(err, hash) {

          const Data=new User({mail:req.body.mail,password:hash});
          Data.save().then((s)=>{ res.send(s)})
          return res.send(false)

        })

      }
      else
      {
        return res.send(true)
      }
    })

})

app.post("/Signin",jsonParser,async(req,res)=>{

    const usr=UserExist.fetchOne(req.body.mail)

    usr.then(async(r)=>{
      
      if(!r)
      {
        res.send("false")
      }
      else
      {
        let data=await User.findOne({mail:req.body.mail})
        bcrypt.compare(req.body.password, data.password, function(err, result) {
          if(result)
           {
            res.send(data)
           }
           else
           {
            res.send("false")
           }
          })

        
      }
    })

})

app.listen(process.env.PORT || 8081);