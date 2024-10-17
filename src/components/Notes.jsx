import React,{useContext} from 'react'
import noteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';
import Home from './Home';

const Notes = () => {
    const context = useContext(noteContext);
  const {notes,setnotes}=context;
  return (
    <>
    <Home/>
    <div className="container">
      <div className="row  my-3 ">
      <h2 className='mx-0'>Your Notes</h2>
      {notes.map((note) => {
        return <Noteitem key={note._id} notes={note}/>
      })}
    </div>
    </div>
    </>
  )
}

export default Notes