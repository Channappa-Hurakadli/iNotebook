import React,{useContext,useState} from 'react'
import noteContext from '../context/notes/noteContext';

const Addnote = () => {
  const context = useContext(noteContext);
  const {addNote}=context;
  const [note,setNote] = useState({title:"",description:"",tag:"default"})
  const [disabled,setDisabled] = useState(true);
  
  const handleClick = (evt) =>{
    evt.preventDefault();
    addNote(note.title,note.description,note.tag);
    
  }
  const onChange = (evt) =>{
      setNote({...note,[evt.target.name]:evt.target.value})
      if(evt.target.value==="")
        setDisabled(true);
      else
        setDisabled(false)
  }
  return (
    <div>
       <div className='container my-3'>
      <h2 className='my-2'>Add a Note</h2>
     <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={onChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" id="description" name='description' onChange={onChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tag</label>
            <input type="text" className="form-control" id="tag" name='tag' onChange={onChange}/>
          </div>
          
          <button type="submit" className="btn btn-primary" disabled={disabled} onClick={handleClick}>Submit</button>
      </form>
    </div>
    </div>
  )
}

export default Addnote
