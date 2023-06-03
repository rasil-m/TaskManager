import React, { useEffect, useState } from 'react'
import Category from '../Components/Category/Category';
import TaskCard from '../Components/TaskCard/TaskCard'
import { fetchData,fetchCategory } from '../utility'

const Home = () => {
  const [Data,setData]=useState([]);
  const [filter,setFilter]=useState(false)

  const loadData=async()=>
   {
    const response=await fetchData()
    setData(response.data)
   }

   useEffect(()=>{
    
    filter?loadCategory():loadData()

   },[])

  const task=Data?.map((task,key)=>{
    if(task.type)
      return(
      <TaskCard data={task} load={loadData}/>
      )
  })

  const loadCategory=async(key)=>
   {
    const response=await fetchCategory(key)
    setData(response.data)
   }

    const handleClick=(e)=>
        {
          loadCategory(e)
          setFilter(true)
        }

  const category=Data?.map((task,k)=>{
    return(
      <Category name={task.tags} handle={handleClick}/>

    )
  })

  //const response=fetchData()

  


  return (
    <div className='__home'>
       <div className="__categories">
       <Category name="All" handle={loadData}/>
        {category}
       </div>
      {task}
    </div>
  )
}

export default Home