import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import NoteState from './context/notes/NoteState.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NoteState>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </NoteState>
  </StrictMode>
)
