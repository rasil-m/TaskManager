import React from 'react'
import TaskCard from '../Components/TaskCard/TaskCard'

const Home = () => {

  return (
    <div className='__home'>
      <TaskCard id={1}/>
      <TaskCard id={2}/>
      <TaskCard id={3}/>
      <TaskCard id={4}/>
      <TaskCard id={5}/>
      <TaskCard id={6}/>
    </div>
  )
}

export default Home