import React from 'react'
import './Category.css'

const Category = ({name,handle}) => {
  return (
    <div>
        {
            (name.length<=0)?null:
     <button className='__category_btn' onClick={()=>{handle(name)}}>{name}</button>
        }
    </div>
  )
}

export default Category