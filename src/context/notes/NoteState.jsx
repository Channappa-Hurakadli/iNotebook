import React,{useState} from "react";
import noteContext from "./noteContext";

const NoteState = (props) =>{

    const host = "http://localhost:5000";
    const initialNotes =[]
    const [notes, setNotes] = useState(initialNotes);
//        -------------------fetching all notes----------------------------
    const getNotes = async ()=>{
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "authToken":localStorage.getItem('token'),
        }
      })
      const data = await  response.json()
      setNotes(data);
    }

//          ------------------------Add a note------------------
    const addNote =async  (title,description,tag)=>{
      //fetching notes from backend
      const response = await fetch(`${host}/api/notes/addnotes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "authToken":localStorage.getItem('token'),
        },
        body: JSON.stringify({title,description,tag}),
      })
        const note = await response.json();
        setNotes(notes.concat(note));
    }

//           ---------------Delete a note--------------------
    const deleteNote = async (id)=>{
      const newNotes = notes.filter((note)=>{return note._id !== id});
      setNotes(newNotes);

      //deleting at the backend using api
      const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "authToken":localStorage.getItem('token'),
        }
      })
      
    }

//          ----------------Edit a note----------------
    const editNote = async (id,title,description,tag)=>{
      //fetching notes to update from backend using api
      const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "authToken":localStorage.getItem('token'),
        },
        body: JSON.stringify({title,description,tag}),
      })
      const json = response.json();
      let newNotes = JSON.parse(JSON.stringify(notes))

      //updating notes
      for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
        if (element._id === id) {
          newNotes[index].title = title;
          newNotes[index].description = description;
          newNotes[index].tag = tag; 
          break; 
        }
      } 
        setNotes(newNotes);
        
      }
    
    return(
    <noteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}}>
        {props.children}
    </noteContext.Provider>
    )
}

export default NoteState;