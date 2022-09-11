import React from 'react'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

function Login() {

  const [credentials, setCredentials] = useState({email:" ", password:" "})
  let navigate  = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/users/user_login', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: credentials.email, password: credentials.password})

    });    
    const json  = await response.json();
    console.log(json)
    if(json.success){
      //
      console.log('ok')
      localStorage.setItem('token',json.token)
      navigate('/')
    }
    else{
      alert('Invalid credentials')
    }
  }

  let onChange = (e)=>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" name='email' id="email" onChange={onChange} value={credentials.email} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="text" className="form-control" name='password' id="password" onChange={onChange} value={credentials.password} />
        </div>
   
        <button type="submit" className="btn btn-primary" >Submit</button>
      </form>

    </>
  )
}

export default Login