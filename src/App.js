import React from 'react'
import './App.css';
import Contact from './components/Contact'
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About'
import NoteState from './context/notes/NoteState';
import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom';
import Alert from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';
import { useState } from 'react';


function App() {
const [alert, setAlert] = useState({msg:'',type:'', display:'block'})
  
const showAlert = (message, type)=>{
  setAlert({
      msg: message,
      type: type
  })
  setTimeout(()=>{
      setAlert({msg:'',type:'', display:'hidden'})
  },5000)
}
  return (
    <>
      
   <NoteState>
      <Routers>
        <Navbar />
        <Alert alert={alert}/>
        <div className="container">

        <Routes>      
            <Route  path='/' element={<Home showAlert={showAlert} />} ></Route>
            <Route exact path='/about' element={<About />} ></Route>
            <Route exact path='/contact' element={<Contact /> } ></Route>
            <Route exact path='/login' element={<Login showAlert={showAlert} /> } ></Route>
            <Route exact path='/signup' element={<Signup showAlert={showAlert} /> } ></Route>
         </Routes>
         </div>
      </Routers>
   </NoteState>
   
     </>
  );
}

export default App;