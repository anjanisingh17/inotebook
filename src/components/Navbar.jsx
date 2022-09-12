import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

function Navbar() {

  const location = useLocation();
  let navigate  = useNavigate();

  const logoutHandle = ()=>{
    localStorage.removeItem('token')
    navigate('/login')
  }


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">iNotebook</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className={`nav-link ${location.path === '/about'}? "active":""  `} aria-current="page" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.path === '/contact'}? "active":""  `} to="/contact">Contact</Link>
          </li>
        </ul>
        {!localStorage.getItem('token')?
        <form className="d-flex">
        <Link className="btn btn-primary mx-2" to='/login' role="button">Login</Link>
        <Link className="btn btn-primary " to='/signup' role="button">Register</Link>
        </form>: <button className="btn btn-primary" onClick={logoutHandle} >Logout</button> }
      </div>
    </div>
  </nav>
  )
}

export default Navbar