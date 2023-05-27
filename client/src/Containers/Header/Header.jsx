import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="__header">
        <h1>Today Task</h1>
        <div className="__filters">
            <a href="#">All</a>
            <a href="#">Important</a>
            <a href="#">Category</a>
        </div>
    </div>
  )
}

export default Header