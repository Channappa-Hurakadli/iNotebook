import React from "react";
import noteContext from "../context/notes/noteContext";
import { useContext } from "react";
const Noteitem = (props) => {

  const { notes,updateNote,showAlert} = props;
  const context = useContext(noteContext);
  const {deleteNote}=context;

  return (
    <div className="col-4">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{notes.title}</h5>
          <p className="card-text">{notes.description}</p>
          <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(notes._id)
            showAlert("Note deleted successfully", "Success")}}></i>
          
          <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateNote(notes)}}></i>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;