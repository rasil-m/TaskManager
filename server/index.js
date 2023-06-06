const express=require("express");
const cors = require('cors');
const app=express();
const mongoose=require("mongoose");
app.use(cors());
const bodyParser=require("body-parser");
const jsonParser = bodyParser.json();
const Taskschema=require("./DB/TaskSchema")
mongoose.connect('mongodb://0.0.0.0:27017/TaskManager');


app.post("/addTask",jsonParser,async(req,res)=>{

   

    const Data=new Taskschema(req.body);
    Data.save().then(()=>{ res.send("true")})
})

app.get("/fetchData",async(req,res)=>{

     let data=await Taskschema.find()
      res.send(data)

})

app.delete("/deleteData/:key",async(req,res)=>{
    await Taskschema.deleteOne({_id:req.params.key})
    res.send(true)
})

app.get("/fetchOne/:key",async(req,res)=>{

     let data=await Taskschema.findOne({_id:req.params.key})
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

app.listen(process.env.PORT || 8081);