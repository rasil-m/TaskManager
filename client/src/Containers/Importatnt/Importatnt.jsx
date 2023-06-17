import React, { useEffect, useState } from 'react'
import TaskCard from '../../Components/TaskCard/TaskCard';
import { fetchImp } from '../../utility';
import './Important.css'

const Importatnt = () => {

  const [Data,setData]=useState([]);

  const loadData=async()=>
   {
    const response=await fetchImp()
    setData(response.data)
   }

   console.log(Data)

   useEffect(()=>{
    loadData()
   },[])

  const task=Data?.map((task,key)=>{
    if(task.type)
      return(
      <TaskCard data={task} load={loadData}/>
      )
  })
  let len=Data?.filter((task,key)=>{return task.type}).length

  return (
    <div className='__tasks'>
             {
        len<=0?
        <div className="__taskcard"> 
        <h1 className="emty">No task found Add new task</h1>
        </div>
        :task
       }
    </div>
  )
}

export default Importatnt