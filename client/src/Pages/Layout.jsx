import React from 'react'
import Sidebar from '../Containers/Sidebar/Sidebar'
import Header from '../Containers/Header/Header'
import Meeting from '../Containers/Meeting/Meeting'

const Layout = () => {
  return (
    <div className="__layout">
        <div className="__sidebar"><Sidebar/></div>
        <div className="__contents">
          <div className="__header_container">
            <Header/>
          </div>
          <div className="__meeting_container">
            <Meeting/>
          </div>
        </div>
    </div>
  )
}

export default Layout