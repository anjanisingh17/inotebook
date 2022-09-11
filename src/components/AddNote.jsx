import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/NoteContext';


function AddNote() {
  const context = useContext(noteContext);
  const { notes, addNote } = context
  const [note, setNote] = useState({ title: "", description: "", tag: "" })

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  const handleClick = (e) => {
    e.preventDefault()
    addNote(note.title, note.description, note.tag)
    setNote({ title: "", description: "", tag: "" })
  }

  return (
    <>
      <div className='conatiner my-3'>
        <h2>Add a Note</h2>
        <div className='my-3'>
          <form>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input type="text" className="form-control" id="title" name="title" value={note.title} onChange={onChange} aria-describedby="emailHelp" minLength={5} />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} minLength={5} />
            </div>

            <div className="mb-3">
              <label className="form-label">tag</label>
              <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} />
            </div>


            <button disabled={note.title.length <5 || note.description.length <5} type="submit" className="btn btn-primary" onClick={handleClick} >Add Note</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddNote