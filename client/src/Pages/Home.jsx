import React, { useEffect, useState } from 'react'
import Category from '../Components/Category/Category';
import TaskCard from '../Components/TaskCard/TaskCard'
import { fetchData,fetchCategory } from '../utility'

const Home = () => {
  const [Data,setData]=useState([]);
  const [filter,setFilter]=useState()


  const loadData=async()=>
   {
    const response=await fetchData()
    setData(response.data)
   }

   useEffect(()=>{
    
    loadData()

   })

   

  const task=Data?.map((task,key)=>{
    if(task.type)
      return(
      <TaskCard data={task} load={loadData}/>
      )
    
  })

  let len=Data?.filter((task,key)=>{return task.type}).length

  const loadCategory=async(key)=>
   {
    const response=await fetchCategory(key)
    setData(response.data)
   }

    const handleClick=(e)=>
        {
          setFilter(true)
          loadCategory(e)
        }

  const category=Data?.map((task,k)=>{
    return(
      <Category name={task.tags} handle={handleClick}/>

    )
  })

  //const response=fetchData()
  


  return (
    <div className='__home'>
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

export default Home