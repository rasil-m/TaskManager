import React, { useEffect, useState } from 'react'
import TaskCard from '../Components/TaskCard/TaskCard'
import { fetchData } from '../utility'

const Home = () => {
  const [Data,setData]=useState([]);

  const loadData=async()=>
   {
    const response=await fetchData()
    setData(response.data)
    console.log(Data)
   }

  useEffect(()=>{

    loadData()

  })

  const task=Data?.map((task,key)=>{
    if(task.type)
      return(
      <TaskCard data={task}/>
      )
  })

  //const response=fetchData()

  return (
    <div className='__home'>
      {task}
    </div>
  )
}

export default Home