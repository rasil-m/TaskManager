import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { Signin } from '../../utility'

const Login = () => {

  const[data,setData]=useState({
    mail:"",
    password:"",
    mathed:true,
    exist:false
  })
  const navigate=useNavigate()

  const handleLogin=async()=>
   {
    const res=await Signin(data)
    if(!res.data)
     {
      setData({...data,exist:true})
     }
    else
     {
      localStorage.setItem("id",res.data._id)
      localStorage.setItem("auth",true)
      navigate("/task")
     }
   }


  return (
    <div className="__login">
      <p>
        <input type="text" value={data.mail} onChange={(e)=>{setData({...data,mail:e.target.value})}}  required/>
        <label>email id</label>
      </p>
      <p>
        <input type="password" value={data.password} onChange={(e)=>{setData({...data,password:e.target.value})}} required/>
        <label>password</label>
      </p>
      {
        data.exist?
        <p className='match'>
        <p className='match'>No User Found !</p>
      </p>:
      null
      }
      <button onClick={()=>{handleLogin()}}>Login</button>
    </div>
  )
}

export default Login