import React,{useContext, useState} from 'react'
import noteContext from '../context/notes/NoteContext';


function AddNote() {
    const context = useContext(noteContext);
    const {notes, addNote} = context
    const [note,setNote] = useState({title:"",description:"",tags: ""})

    const onChange = (e)=>{
        setNote({...note,[e.target.name]: e.target.value})
    }

    const handleClick = (e)=>{
        e.preventDefault()
        addNote(note.title, note.description, note.tag)
    }

    return (
   <>
    <div className='conatiner my-3'>
        <h2>Add a Note</h2>
<div className='my-3'>
        <form>
  <div className="mb-3">
    <label className="form-label">Title</label>
    <input type="text" className="form-control" id="title" name="title" onChange={onChange}  aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label  className="form-label">Description</label>
    <input type="text" className="form-control" id="description" name="description" onChange={onChange} />
  </div>

  <div className="mb-3">
    <label  className="form-label">Tags</label>
    <input type="text" className="form-control" id="tags" name="tags" onChange={onChange} />
  </div>


  <button type="submit" className="btn btn-primary" onClick={handleClick} >Add Note</button>
</form>
</div>
</div>
   </>
  )
}

export default AddNote