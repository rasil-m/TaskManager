import React from 'react'
import Sidebar from '../Containers/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="__layout">
        <div className="__sidebar"><Sidebar/></div>
        <div className="__contents"><Outlet/></div>
    </div>
  )
}

export default Layout