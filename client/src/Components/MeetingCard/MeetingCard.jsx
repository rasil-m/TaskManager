import React, { useState } from 'react'
import './MeetingCard.css'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

const MeetingCard = () => {

    const[dlg,setDlg]=useState(false)

    const handleDlg=()=>
     {
        setDlg(!dlg)
     }

  return (
    <div className="__meeting_card">
        <MoreVertOutlinedIcon className='__more' onClick={()=>{handleDlg()}}/>
        <div className='__content'>
        <p>12:30 PM - 02:00 PM</p>
        <h2>Meeting With Product Manager</h2>
        <button onClick={()=>{alert()}}>Finished</button>
        </div>
        {
            dlg?
            <div className="__dlg">
            <p>Edit</p>
            <p>Delete</p>
            </div>
            :null
        }
    </div>
  )
}

export default MeetingCard