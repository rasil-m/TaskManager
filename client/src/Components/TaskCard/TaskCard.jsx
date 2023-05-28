import React, { useState } from 'react'
import './TaskCard.css'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

const TaskCard = ({id}) => {

    const[dlg,setDlg]=useState(false)

    const handleDlg=()=>
     {
        setDlg(!dlg)
     }

  return (
    <div className="__taskcard"> 
     <div className="__taskcontents">
        <h2>User flow diagram for ecommerce app</h2>
        <p>Ecommerce app from mytech solutions</p>
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
            <p>Edit</p>
            <p onClick={()=>{alert(id)}}>Delete</p>
            </div>
            :null
        }
    </div>
  )
}

export default TaskCard