import React,{useContext,useState} from 'react'
import noteContext from '../context/notes/noteContext';

const Addnote = (props) => {
  const context = useContext(noteContext);
  const {addNote}=context;
  const [note,setNote] = useState({title:"",description:"",tag:""})
  
  const handleClick = (evt) =>{
    evt.preventDefault();
    addNote(note.title,note.description,note.tag);
    setNote({ title: "", description: "", tag: "" });
    props.showAlert("Note Added Succesfully","Success")
  }
  const onChange = (evt) =>{
      setNote({...note,[evt.target.name]:evt.target.value})
      
  }
  return (
    <div>
       <div className='container my-3'>
      <h2 className='my-2'>Add a Note</h2>
     <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={onChange} minLength={4} required value={note.title}/>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" id="description" name='description' onChange={onChange} minLength={4} required value={note.description}/>
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tag</label>
            <input type="text" className="form-control" id="tag" name='tag' onChange={onChange} value={note.tag}/>
          </div>
          
          <button type="submit" className="btn btn-primary" disabled={note.title<4||note.description<4?true:false} onClick={handleClick}>Add Note</button>
      </form>
    </div>
    </div>
  )
}

export default Addnote
