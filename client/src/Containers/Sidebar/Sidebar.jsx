import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const Sidebar = () => {
  return (
    <div className="__navbar">
        <Link to=""><TodayOutlinedIcon/>Today</Link>
        <Link to=""><StarBorderOutlinedIcon/>Important</Link>
        <Link to=""><CalendarMonthOutlinedIcon/>Upcoming</Link>
        <Link to=""><DeleteOutlineOutlinedIcon/>Trash</Link>
    </div>
  )
}

export default Sidebar