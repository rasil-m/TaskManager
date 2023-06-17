import React, { useEffect, useState } from 'react'
import MeetingCard from '../../Components/MeetingCard/MeetingCard'
import './Meeting.css'
import { fetchData } from '../../utility'

const Meeting = () => {
  const [Data,setData]=useState([]);

  const loadData=async()=>
   {
    const response=await fetchData()
    setData(response.data)
   }

  useEffect(()=>{

    loadData()

  })

  const task=Data?.map((task,key)=>{
    if(!task.type)
      return(
      <MeetingCard data={task}/>
      )
  })
  let len=Data?.filter((task,key)=>{return !(task.type)}).length
  

  return (
    <div className="__meeting">
        <h1>Meeting Schedule</h1>
        <div className="__card">
        {
        len<=0?
        <div className="__meeting_card"> 
        <h1 className="emty">Add new meeting</h1>
        </div>
        :task
       }
        </div>
    </div>
  )
}

export default Meeting