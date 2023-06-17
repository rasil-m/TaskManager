import React, { useEffect, useState } from 'react'
import Sidebar from '../Containers/Sidebar/Sidebar'
import Header from '../Containers/Header/Header'
import Meeting from '../Containers/Meeting/Meeting'
import { Outlet } from 'react-router-dom'

const Layout = () => {

  const[auth,Setauth]=useState()
  const status=localStorage.getItem('auth')
  
  useEffect(() => {
       Setauth(status)

  })

  return (
    <>
    {
      auth?
      <div className="__layout">
      <div className="__sidebar"><Sidebar/></div>
      <div className="__contents">
        <div className="__header_container">
          <Header/>
          <Outlet/>
        </div>
        <div className="__meeting_container">
          <Meeting/>
        </div>
      </div>
  </div>:null

    }
    </>

  )
}

export default Layout