import './App.css'
import AddNewNote from "./components/AddNewNote.jsx";
import NoteList from "./components/NoteList.jsx";
import {useState} from "react";

function App() {
    const [note, setNote] = useState([])
    const handleSetNote = (newNote) => {
        setNote(prevNote=> [...prevNote, newNote])
    }

  return (
    <div className='container'>
        <div className="note-header">note header</div>
        <div className="note-app">
            <AddNewNote onHandleSetNote = {handleSetNote}/>
            <div className="note-container">
                <NoteList notes = {note}/>
            </div>
        </div>
    </div>
  )
}

export default App
