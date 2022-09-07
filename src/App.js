import React,{createContext} from 'react'
import './App.css';
import Contact from './components/Contact'
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About'
import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom';

const FirstName = createContext()
const LastName  = createContext()

function App() {

  

  return (
    <>
    <FirstName.Provider value="Thapa">
     <LastName.Provider value="Technical">
        <Contact />
     </LastName.Provider>
     </FirstName.Provider>

      <Routers>
        <Navbar />
        <Routes>      
            <Route  path='/' element={<Home />} ></Route>
            <Route exact path='/about' element={<About />} ></Route>
            <Route exact path='/contact' element={<Contact /> } ></Route>
         </Routes>
      </Routers>
     </>
  );
}

export default App;
export {FirstName,LastName}