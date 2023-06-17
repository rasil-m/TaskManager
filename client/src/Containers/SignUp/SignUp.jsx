import React, { useState } from 'react'
import { signUp } from '../../utility'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

  const[data,setData]=useState({
    mail:"",
    password:"",
    mathed:true,
    exist:false
  })
  const navigate=useNavigate()

  const handleSignUp=async()=>
   {
    const res=await signUp(data)
    if(res.data)
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
        <input type="text" value={data.mail} onChange={(e)=>{setData({...data,mail:e.target.value})}} required/>
        <label>email id</label>
      </p>
      <p>
        <input type="password" value={data.password} onChange={(e)=>{setData({...data,password:e.target.value})}} required/>
        <label>password</label>
      </p>
      <p>
        <input type="password"  onChange={(e)=>{(data.password==e.target.value)?setData({...data,mathed:true}):setData({...data,mathed:false})}} required/>
        <label>Retype Password</label>
      </p>
      {
        (!data.mathed)?
        <p className='match'>
        Password not matched!
      </p>:
      null
      }
      {
        data.exist?
        <p className='match'>
        <p className='match'>User Already Exist! Try Login</p>
      </p>:
      null
      }
      
      <button onClick={()=>{handleSignUp()}}>Create Account</button>
    </div>
  )
}

export default SignUp