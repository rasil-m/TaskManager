import React from 'react'
import { useState } from 'react'
import './Addtask.css'
import CloseIcon from '@mui/icons-material/Close';

const Addtask = ({isOpen}) => {

    const currentDate=new Date().toLocaleDateString().split("/")
    let today=currentDate[2]+"-"+((currentDate[0]<10)?"0"+currentDate[0]:currentDate[0])+"-"+((currentDate[1]<10)?"0"+currentDate[1]:currentDate[1])

    const currentTime=new Date().toLocaleTimeString('en-US', { hour12: false, hour: "numeric", minute: "numeric"})
    

    const[data,setData]=useState({
        taskName:"",
        date:today,
        time:currentTime,
        desc:"",
        tags:""

    })

  return (
    <>
    {isOpen?
     <div className="__addtask" style={isOpen?{transform:"scale(1,1)"}:{transform:"scale(0,0)"}}>
        <form action="">
            <h1>Add new task</h1>
            <CloseIcon className='closeIcon'/>
            <p>
                <input type="text" className='taskName' onChange={(e)=>{setData({...data,taskName:e.target.value})}} value={data.taskName}/>
                <label>Task name</label>
            </p>

            <p>
                <input type="date" onChange={(e)=>{setData({...data,date:e.target.value})}} value={data.date}/>
            </p>
            <p>
                <input type="time" onChange={(e)=>{setData({...data,time:e.target.value})}} value={data.time} />
            </p>
            <p>
                <input type="text" onChange={(e)=>{setData({...data,desc:e.target.value})}} value={data.desc}/>
                <label>Description</label>
            </p>
            <p>
                <input type="textarea" onChange={(e)=>{setData({...data,tags:e.target.value})}} value={data.tags}/>
                <label>Tags</label>
            </p>
            <button>Create task</button>
        </form>
     </div>:null}
    </>
  )
}

export default Addtask