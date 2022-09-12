import React from 'react'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

function Signup(props) {

  const [credentials, setCredentials] = useState({name:"", email:"", password:"", cpassword:""})
  let navigate  = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault();

    const {name, email, password} = credentials;

    const response = await fetch('http://localhost:5000/api/users/user_create', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, email, password})

    });    
    const json  = await response.json();
    console.log(json)
    if(json.success){
      
      localStorage.setItem('token',json.token)
      navigate('/')
      props.showAlert("Account created successfully","success")
    }
    else{
      props.showAlert("User already exists with this email","danger")
    }
  }

  let onChange = (e)=>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }


  return (
    <>
      <div className='container'>
      <h4 style={{textAlign:'center'}}>Register</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" name='name' id="name" onChange={onChange} value={credentials.name} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' id="email" onChange={onChange} value={credentials.email} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" name='password' id="password" onChange={onChange} value={credentials.password} minLength={5} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" name='cpassword' id="cpassword" onChange={onChange} value={credentials.cpassword} minLength={5} required/>
          </div>

          <button type="submit" className="btn btn-primary" >Submit</button>
        </form>
      </div>
    </>
  )
}

export default Signup