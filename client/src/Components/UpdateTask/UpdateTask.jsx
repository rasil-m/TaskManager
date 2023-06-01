import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { fetchOne,UpdateOne } from '../../utility'
import { useEffect } from 'react'

const UpdateTask = ({isOpen,handle,type,uid}) => {

    const[data,setData]=useState([])
   useEffect(()=>{
    fetchOne(uid).then((r)=>{
        setData(r.data)
    })
   },[])
    

    console.log(data)

    const handleForm=async(e)=>
     {
        e.preventDefault()
        const res=await UpdateOne(data)
        if(res.data)
         handle()

     }


  return (
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
                <input type="time" onChange={(e)=>{setData({...data,time1:e.target.value})}} value={data.time1} required/>
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
    
            <button onClick={handleForm}>Update</button>
        </form>
     </div>
  )
}

export default UpdateTask