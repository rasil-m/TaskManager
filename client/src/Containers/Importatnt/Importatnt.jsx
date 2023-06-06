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

  return (
    <div className='__tasks'>
      {task}
    </div>
  )
}

export default Importatnt