import React, { useState } from 'react'
import './TaskCard.css'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { deletData } from '../../utility';
import Addtask from '../Addtask/Addtask';
import UpdateTask from '../UpdateTask/UpdateTask';

const TaskCard = ({data}) => {

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

  return (
    <div className="__taskcard"> 
     <div className="__taskcontents">
        <h2>{data.taskName}</h2>
        <p>{data.desc}</p>
        <select>
            <option value="" selected>status</option>
            <option value="">progress</option>
            <option value="">finished</option>
        </select>
     </div>
     <MoreVertOutlinedIcon className='__more' onClick={()=>{handleDlg()}}/>
     {
            dlg?
            <div className="__dlg">
            <p onClick={()=>{editTask(data._id)}}>Edit</p>
            <p onClick={()=>{deleteTask(data._id)}}>Delete</p>
            </div>
            :null
        }
        {
          toggle?
          <UpdateTask isOpen={true} handle={handleToggle} type={true} uid={udata}/>:null
        }
        
    </div>
  )
}

export default TaskCard