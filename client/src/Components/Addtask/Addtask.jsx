import React from 'react'
import { useState } from 'react'
import './Addtask.css'
import CloseIcon from '@mui/icons-material/Close'

const Addtask = ({isOpen,handle,type}) => {

    const currentDate=new Date().toLocaleDateString().split("/")
    let today=currentDate[2]+"-"+((currentDate[0]<10)?"0"+currentDate[0]:currentDate[0])+"-"+((currentDate[1]<10)?"0"+currentDate[1]:currentDate[1])

    const currentTime=new Date().toLocaleTimeString('en-US', { hour12: false, hour: "numeric", minute: "numeric"})
    

    const[data,setData]=useState({
        taskName:"",
        date:today,
        time:currentTime,
        desc:"",
        tags:"",
        important:false

    })

     console.log(type?"Task":"Meeting")

    const handleForm=(e)=>
     {
        e.preventDefault()
     }

  return (
    <>
    {isOpen?
     <div className="__addtask" style={isOpen?{transform:"scale(1,1)"}:{transform:"scale(0,0)"}}>
        <form onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault() }}>
            <h1>Add new {type?"Task":"Meeting"}</h1>
            <CloseIcon className='closeIcon' onClick={()=>{handle()}}/>
            <p>
                <input type="text" className='taskName' onChange={(e)=>{setData({...data,taskName:e.target.value})}} value={data.taskName} required/>
                <label>Task name</label>
            </p>

            <p>
                <input type="date" onChange={(e)=>{setData({...data,date:e.target.value})}} value={data.date} required/>
            </p>
            <p>
                <input type="time" onChange={(e)=>{setData({...data,time:e.target.value})}} value={data.time} required/>
            </p>
            
            {type?
            <p>
                <input type="text" onChange={(e)=>{setData({...data,desc:e.target.value})}} value={data.desc} required/>
                <label>Description</label>
            </p>:
            <p>
            <input type="time" onChange={(e)=>{setData({...data,time:e.target.value})}} value={data.time} required/>
           </p>
            
            }
            {type?
            <p>
                <input type="textarea" onChange={(e)=>{setData({...data,tags:e.target.value})}} value={data.tags} required/>
                <label>Tags</label>
                <p className='tags'>
                {
                    data.tags?
                   (data.tags.split(" ")).map((val,key)=>(
                      <span>{val}</span> 
                    
                   ))
        
                :null}
                </p>
            </p>
    :null}
            <p className='important'>
                <input type="checkbox" onChange={(e)=>{setData({...data,important:!(data.important)})}}/>Set as important
            </p>
    
            <button onClick={handleForm}>Create {type?"Task":"Meeting"}</button>
        </form>
     </div>:null}
    </>
  )
}

export default Addtask