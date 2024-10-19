import React,{useContext,useEffect,useRef,useState} from 'react'
import noteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';
import Addnote from './Addnote';
import { useNavigate } from 'react-router-dom';

const Notes = (props) => {
  const navigate=useNavigate();
  const context = useContext(noteContext);
  const {notes,getNotes,editNote}=context;
  useEffect(()=>{
    if(localStorage.getItem('token')){
    getNotes();
    }else{
      navigate('/login');
    }
  },[]);
  const ref = useRef('');
  const [note,setNote] = useState({id:"",etitle:"",edescription:"",etag:""})

  const updateNote = (currentNote) =>{
    setNote({id:currentNote._id,etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag});
    ref.current.click();
  }
  
  const handleClick = (evt) =>{
    evt.preventDefault();
    // console.log(note);
    editNote(note.id,note.etitle,note.edescription,note.etag);
    props.showAlert("Note Updated Successfully","Success");

    
  }
  const onChange = (evt) =>{
      setNote({...note,[evt.target.name]:evt.target.value})
     
  }
  return (
    <>
    <Addnote showAlert={props.showAlert}/>
<button type="button" ref={ref}className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
          <form>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="etitle" name='etitle' aria-describedby="emailHelp" value={note.etitle} onChange={onChange} minLength={4} required/>
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" className="form-control" id="edescription" name='edescription' value={note.edescription}  onChange={onChange} minLength={4} required/>
              </div>
              <div className="mb-3">
                <label htmlFor="tag" className="form-label">Tag</label>
                <input type="text" className="form-control" id="etag" name='etag' value={note.etag}  onChange={onChange}/>
              </div>
          </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={handleClick} data-bs-dismiss="modal" disabled={note.etitle<4||note.edescription<4?true:false}>Update</button>
      </div>
    </div>
  </div>
</div>
    <div className="container">
      <div className="row  my-3 ">
      <h2 className='mx-0'>Your Notes</h2>
      <div className="container">{notes.length === 0 && "No Notes to be displayed"}</div>
      {notes.map((note) => {
        return <Noteitem key={note._id} updateNote={updateNote} notes={note} showAlert={props.showAlert}/>
      })}
    </div>
    </div>
    </>
  )
}

export default Notes