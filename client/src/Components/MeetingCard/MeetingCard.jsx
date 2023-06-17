import React, { useState } from 'react'
import './MeetingCard.css'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { deletData } from '../../utility';

const MeetingCard = ({data}) => {

    const[dl,setDl]=useState(false)

    const handleDl=()=>
     {
        setDl(!dl)
     }

     /*after */

     const[dlg,setDlg]=useState(false)
     const [toggle,setToggle]=useState(false)
     const [udata,setUdata]=useState()
 
     const handleDlg=()=>
      {
         setDlg(!dlg)
      }
     
     const editTask=(edit)=>
      {
        setToggle(true)
        setUdata(edit)
      }
     const deleteTask=async(id)=>
      {
       const response=await deletData(id)
        if(response.data)
         handleDlg()
      }
 
      const handleToggle=()=>
    {
       setToggle(!toggle)
    }
    const finishTask=async(key)=>
    {
      const response=await deletData(key)
        if(response.data)
         handleDlg()
    }
    

     

  return (
    <div className="__meeting_card">
        <MoreVertOutlinedIcon className='__more' onClick={()=>{handleDl()}}/>
        <div className='__content'>
        <p>12:30 PM - 02:00 PM</p>
        <h2>{data.taskName}</h2>
        <button onClick={()=>{finishTask(data._id)}}>Finished</button>
        </div>
        {
            dl?
            <div className="__dlg">
            <p onClick={()=>{editTask(data._id)}}>Edit</p>
            <p onClick={()=>{deleteTask(data._id)}}>Delete</p>
            </div>
            :null
        }
    </div>
  )
}

export default MeetingCard