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

    const newData=
    {
        taskName:"Task Name",
        date:"",
        time1:"",
        time2:"",
        desc:"",
        tags:"",
        important:""
    }

    const Data=new Taskschema(req.body);
    Data.save().then(()=>{ res.send("true")})
})

app.listen(process.env.PORT || 8081);