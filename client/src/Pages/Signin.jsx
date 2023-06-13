import React from 'react'
import { useState } from 'react'
import Login from '../Containers/Login/Login'
import SignUp from '../Containers/SignUp/SignUp'

const Signin = () => {

    const [authType,setauthType]=useState(false)

  return (
    <div className="__signin">
        <h1>Welcome</h1>
        {
            authType?
            <Login/>
            : <SignUp/>
        }
        
        {
            authType?
            <p>Don't have an account? <span onClick={()=>{setauthType(false)}}>Sign Up now</span></p>
            :<p>Already have an account? <span onClick={()=>{setauthType(true)}}>Login now</span></p>
        }
    </div>
  )
}

export default Signin