import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className="__header">
        <h1>Today Task</h1>
        <div className="__filters">
            <Link to="">All</Link>
            <Link to="important">Important</Link>
            <Link to="#">Category</Link>
        </div>
    </div>
  )
}

export default Header