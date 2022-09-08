import React,{useContext} from 'react'
import noteContext from '../context/notes/NoteContext';


function NoteItem(props) {
  const context = useContext(noteContext);
  const {deleteNote} = context  
const {note} = props

  return (
   <>
   <div className='col-md-3 col-lg-3 col-sm-3'>
    <div className="card bg-light text-success my-2" >
      <div className="card-body">
         <div className='d-flex align-items-center'>
          <h5 className="card-title">{note.title}</h5> 
          <i className="fa fa-trash-o mx-2" aria-hidden="true" onClick={()=>{deleteNote(note._id)}}></i>
          <i className="fa fa-pencil-square-o mx-2" aria-hidden="true"></i>
          </div>
          <p className="card-text">{note.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
         

      </div>
    </div>
    </div>
   </>
  )
}

export default NoteItem