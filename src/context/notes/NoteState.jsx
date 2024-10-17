import React,{useState} from "react";
import noteContext from "./noteContext";

const NoteState = (props) =>{
    const initialNotes = [
        {
            "_id": "670ff11fc704908fb2860e33",
            "user": "6706b4f6c9d4abf345d80a4a",
            "title": "Note Updated",
            "description": "The previous note has been updated",
            "tag": "personal",
            "date": "2024-10-16T17:00:15.832Z",
            "__v": 0
          },
          {
            "_id": "671006b9fb23468a54e35150",
            "user": "6706b4f6c9d4abf345d80a4a",
            "title": "React Back end",
            "description": "this is the project that focuses on backend setup of iNotebook",
            "tag": "public",
            "date": "2024-10-16T18:32:25.095Z",
            "__v": 0
          },
          {
            "_id": "670ff11fc704908fb2860e33",
            "user": "6706b4f6c9d4abf345d80a4a",
            "title": "Note Updated",
            "description": "The previous note has been updated",
            "tag": "personal",
            "date": "2024-10-16T17:00:15.832Z",
            "__v": 0
          },
          {
            "_id": "671006b9fb23468a54e35150",
            "user": "6706b4f6c9d4abf345d80a4a",
            "title": "React Back end",
            "description": "this is the project that focuses on backend setup of iNotebook",
            "tag": "public",
            "date": "2024-10-16T18:32:25.095Z",
            "__v": 0
          }
    ]
    const [notes, setNotes] = useState(initialNotes);

    // Add a note
    const addNote = ()=>{

    }
    //Delete a note
    const deleteNote = ()=>{
      
    }
    //Edit a note
    const editNote = ()=>{
      
    }
    return(
    <noteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
        {props.children}
    </noteContext.Provider>
    )
}

export default NoteState;