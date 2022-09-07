import React, { useContext } from 'react'
import {FirstName,LastName} from '../App'


function Contact() {

    const fname = useContext(FirstName)
    const lname = useContext(LastName)


    return (    
    <div>This is contact page. For more Information contact to : {fname} {lname}</div>
  )
}

export default Contact