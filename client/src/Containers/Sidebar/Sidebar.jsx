import React, { useState } from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Addtask from '../../Components/Addtask/Addtask';
import CloseIcon from '@mui/icons-material/Close'

const Sidebar = () => {

  const [toggle,setToggle]=useState(false)
  const[dlg,setDlg]=useState(false)
  const[type,setType]=useState()

  const handleToggle=()=>
   {
    setToggle(!toggle)
   }

   const handleDlg=()=>
     {
        setDlg(!dlg)
     }

  return (
    <div className="__navbar">
        <Link to=""><TodayOutlinedIcon/>Today</Link>
        <Link to="important"><StarBorderOutlinedIcon/>Important</Link>
        <Link to=""><CalendarMonthOutlinedIcon/>Upcoming</Link>
        <Link to=""><DeleteOutlineOutlinedIcon/>Trash</Link>
        <div className="__category_box">
          <button className='create'onClick={()=>{handleDlg()}}><AddOutlinedIcon sx={{ fontSize:25 }}/></button>
          {
            dlg?
            <div className="__types">
            <CloseIcon sx={{ fontSize:18 }} className='____close' onClick={()=>{handleDlg()}}/>
            <p onClick={()=>{handleToggle();setType(true)}}>Task</p>
            <p onClick={()=>{handleToggle();setType(false)}}>Meeting</p>
          </div> :null
          }
        </div>
        
        <Addtask isOpen={toggle} handle={handleToggle} type={type}/>
    </div>

  )
}

export default Sidebar