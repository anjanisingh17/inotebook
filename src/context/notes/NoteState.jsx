import React, { useState } from "react";
import NoteContext from "./NoteContext";
    
const NoteState = (props)=>{

const host = "http://localhost:5000"   
const initialNotes = [];
const[notes, setNotes] = useState(initialNotes);

//Fetch All notes 
const getNotes = async()=>{

    //API CALL START
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzE1ZjA5OTE4NTdlOTNjMGQ1YmNlMjciLCJpYXQiOjE2NjI0NTAwNjB9.f-ksfVhrkHzHEXSWWJr4GX61AExKv97o-3W4z6YYLfk' 
        }
      });    
      const json  = await response.json();
      setNotes(json)
    //API CALL END
}





//Add a Note
const addNote = async(title, description, tag)=>{

    //API CALL START

    const response = await fetch(`${host}/api/notes/addnotes`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzE1ZjA5OTE4NTdlOTNjMGQ1YmNlMjciLCJpYXQiOjE2NjI0NTAwNjB9.f-ksfVhrkHzHEXSWWJr4GX61AExKv97o-3W4z6YYLfk' 
        },
        body: JSON.stringify({title, description, tag}) 
      });
      let json =  await response.json(); 
    //API CALL END


    console.log(`Add a note ...`)

      setNotes(notes.concat(json))  
}

//Delete a Note
const deleteNote = async(id)=>{
    //API CALL START

    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: 'DELETE', 
        headers: {
          'Content-Type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzE1ZjA5OTE4NTdlOTNjMGQ1YmNlMjciLCJpYXQiOjE2NjI0NTAwNjB9.f-ksfVhrkHzHEXSWWJr4GX61AExKv97o-3W4z6YYLfk' 
        },
      });
      const json = await response.json(); 
      console.log(json)
    //API CALL END

    // console.log('Deleting a note ....',id)
    
    const  newNotes = notes.filter((note)=>{
       return note._id !==  id
    })
    setNotes(newNotes)
}


//Edit a Note
const editNote = async(id, title, description, tag)=>{
    
    //API CALL 
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzE1ZjA5OTE4NTdlOTNjMGQ1YmNlMjciLCJpYXQiOjE2NjI0NTAwNjB9.f-ksfVhrkHzHEXSWWJr4GX61AExKv97o-3W4z6YYLfk' 
        },
        body: JSON.stringify({title, description, tag}) 
      });
      const json =  await response.json(); 
    
    
    //Logic to edit in client
    for(let index = 0; index.notes.length; index++){
        const element = notes[index];
        if(element._id === id){
             element.title = title;
             element.description = description;
             element.tag = tag
        }
     }
}




    return(
            <NoteContext.Provider value={{notes, addNote, deleteNote, editNote,getNotes}}>
                {props.children}
            </NoteContext.Provider>
        )
}

export default NoteState