import React, { useState } from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Addtask from '../../Components/Addtask/Addtask';

const Sidebar = () => {

  const [toggle,setToggle]=useState(false)

  return (
    <div className="__navbar">
        <Link to=""><TodayOutlinedIcon/>Today</Link>
        <Link to=""><StarBorderOutlinedIcon/>Important</Link>
        <Link to=""><CalendarMonthOutlinedIcon/>Upcoming</Link>
        <Link to=""><DeleteOutlineOutlinedIcon/>Trash</Link>
        <button className='create' onClick={()=>{setToggle(!toggle)}}><AddOutlinedIcon sx={{ fontSize:25 }}/></button>
        <Addtask isOpen={toggle}/>
    </div>

  )
}

export default Sidebar