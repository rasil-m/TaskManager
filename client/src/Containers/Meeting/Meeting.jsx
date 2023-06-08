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
  

  return (
    <div className="__meeting">
        <h1>Meeting Schedule</h1>
        <div className="__card">
          {task}
        </div>
    </div>
  )
}

export default Meeting