import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className="__login">
      <p>
        <input type="text" required/>
        <label>email id</label>
      </p>
      <p>
        <input type="password" required/>
        <label>password</label>
      </p>
      <button>Login</button>
    </div>
  )
}

export default Login