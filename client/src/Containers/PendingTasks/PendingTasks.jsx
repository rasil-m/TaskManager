import React, { useEffect, useState } from 'react'
import TaskCard from '../../Components/TaskCard/TaskCard';
import { fetchData } from '../../utility';

const PendingTasks = () => {

    const currentDate=new Date().toLocaleDateString().split("/")
    let today=currentDate[2]+"-"+((currentDate[0]<10)?"0"+currentDate[0]:currentDate[0])+"-"+((currentDate[1]<10)?"0"+currentDate[1]:currentDate[1])

    const [Data,setData]=useState([]);

    const loadData=async()=>
     {
      const response=await fetchData()
      setData(response.data)
     }
  
     console.log(Data)
  
     useEffect(()=>{
      loadData()
     },[])

     const task=Data?.map((task,key)=>{
        if(task.type && (new Date(task.date)< new Date(today)))
          return(
          <TaskCard data={task} load={loadData}/>
          )
      })

      let len=Data?.filter((task,key)=>{return task.type}).length

  return (
    <div>
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

export default PendingTasks