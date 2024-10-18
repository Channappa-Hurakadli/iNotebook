import React,{useState} from "react";
import noteContext from "./noteContext";

const NoteState = (props) =>{

    const host = "http://localhost:5000";
    const initialNotes =[]
    const [notes, setNotes] = useState(initialNotes);

    //-------------------fetching all notes----------------------------
    const getNotes = async ()=>{
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "authToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcwNmI0ZjZjOWQ0YWJmMzQ1ZDgwYTRhIn0sImlhdCI6MTcyOTA5NTAzM30.FgfGAdJAHFqDQLjZdqJDL7-2ykcAC-LHIDujUEHv2AA"
        }
      })
      const data = await  response.json()
      setNotes(data);
    }

    // ------------------------Add a note------------------
    const addNote =async  (title,description,tag)=>{
      //fetching notes from backend
      const response = await fetch(`${host}/api/notes/addnotes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "authToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcwNmI0ZjZjOWQ0YWJmMzQ1ZDgwYTRhIn0sImlhdCI6MTcyOTA5NTAzM30.FgfGAdJAHFqDQLjZdqJDL7-2ykcAC-LHIDujUEHv2AA"
        },
        body: JSON.stringify({title,description,tag}),
      })
        // const note = response.json();
        // console.log(data);
        const note = {
          "_id": "671006b9fb23468a54e351501",
          "user": "6706b4f6c9d4abf345d80a4ab",
          "title": title,
          "description":description,
          "tag": tag,
          "date": "2024-10-16T18:32:25.095Z",
          "__v": 0
        }
        setNotes(notes.concat(note));
    }

    //---------------Delete a note--------------------
    const deleteNote = async (id)=>{
      const newNotes = notes.filter((note)=>{return note._id !== id});
      setNotes(newNotes);

      //deleting at the backend using api
      const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "authToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcwNmI0ZjZjOWQ0YWJmMzQ1ZDgwYTRhIn0sImlhdCI6MTcyOTA5NTAzM30.FgfGAdJAHFqDQLjZdqJDL7-2ykcAC-LHIDujUEHv2AA"
        }
      })
      
    }

    //----------------Edit a note----------------
    const editNote = async (id,title,description,tag)=>{
      // console.log(id);
      //fetching notes to update from backend using api
      const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "authToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcwNmI0ZjZjOWQ0YWJmMzQ1ZDgwYTRhIn0sImlhdCI6MTcyOTA5NTAzM30.FgfGAdJAHFqDQLjZdqJDL7-2ykcAC-LHIDujUEHv2AA"
        },
        body: JSON.stringify({title,description,tag}),
      })
      const json = response.json();
      // console.log(json)
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
        // console.log("Updated notes:", newNotes)
        
      }
    
    return(
    <noteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}}>
        {props.children}
    </noteContext.Provider>
    )
}

export default NoteState;