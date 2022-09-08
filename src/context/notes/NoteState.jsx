import React, { useState } from "react";
import NoteContext from "./NoteContext";
    
const NoteState = (props)=>{

const initialNotes = [
    {
        "_id": "63171854cdbe0077f816db3d",
        "user": "6315f0991857e93c0d5bce27",
        "title": "Now title is updated",
        "description": "This is the description of the second note",
        "tag": "second note",
        "date": "2022-09-06T09:52:20.911Z",
        "__v": 0
    },
    {
        "_id": "6317186bcdbe0077f816db3f",
        "user": "6315f0991857e93c0d5bce27",
        "title": "This is third note",
        "description": "This is the description of the third note",
        "tag": "third note",
        "date": "2022-09-06T09:52:43.589Z",
        "__v": 0
    },
    {
        "_id": "63171b228256cf94a2f6b0ad",
        "user": "6315f0991857e93c0d5bc027",
        "title": "This is fourth note",
        "description": "This is the description of the fourth note",
        "tag": "fourth note",
        "date": "2022-09-06T10:04:18.789Z",
        "__v": 0
    },
    {
        "_id": "631721af7f65e573b68541a9",
        "user": "6315f0991857e93c0d5bce27",
        "title": "This is fifth note",
        "description": "d",
        "tag": "fifth note",
        "date": "2022-09-06T10:32:15.545Z",
        "__v": 0
    },
    {
        "_id": "63171b228256cf94a2f6b1ad",
        "user": "6315f0991857e93c0d5bce27",
        "title": "This is fourth note",
        "description": "This is the description of the fourth note",
        "tag": "fourth note",
        "date": "2022-09-06T10:04:18.789Z",
        "__v": 0
    },
    {
        "_id": "63171854cdbe0077f816db6d",
        "user": "6315f0991857e93c0d5bc527",
        "title": "Now title is updated",
        "description": "This is the description of the second note",
        "tag": "second note",
        "date": "2022-09-06T09:52:20.911Z",
        "__v": 0
    },
    {
        "_id": "6317186bcdbe0077f816db7f",
        "user": "6315f0991857e93c0d5bc727",
        "title": "This is third note",
        "description": "This is the description of the third note",
        "tag": "third note",
        "date": "2022-09-06T09:52:43.589Z",
        "__v": 0
    }
]

const[notes, setNotes] = useState(initialNotes);

//Add a Note
const addNote = (title, description, tag)=>{

    console.log(`Add a note ...`)

    const note =  {
        "_id": "6317186bcdbe0077f816d37uf",
        "user": "6315f0991857e93c0d5b37u27",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2022-09-06T09:52:43.589Z",
        "__v": 0
    };
    setNotes(notes.concat(note))  
}

//Delete a Note
const deleteNote = (id)=>{
    console.log('Deleting a note ....'+id)
    const  newNotes =  notes.filter((note)=>{
       return note._id !==  id
    })
    setNotes(newNotes)
}


//Edit a Note
const editNote = ()=>{

}




    return(
            <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
                {props.children}
            </NoteContext.Provider>
        )
}

export default NoteState