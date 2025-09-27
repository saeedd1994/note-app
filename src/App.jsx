import './App.css'
import AddNewNote from "./components/AddNewNote.jsx";
import NoteList from "./components/NoteList.jsx";
import {useState} from "react";

function App() {
    const [note, setNote] = useState([])
    const handleSetNote = (newNote) => {
        setNote(prevNote => [...prevNote, newNote])
    }

    const handleDeleteNote = (id) => {
        setNote(prevNote => prevNote.filter(item => item.id !== id))
    }

    return (
        <div className='container'>
            <div className="note-header">note header</div>
            <div className="note-app">
                <AddNewNote onHandleSetNote={handleSetNote}/>
                <div className="note-container">
                    <NoteList notes={note} OnDeleteNote={handleDeleteNote}/>
                </div>
            </div>
        </div>
    )
}

export default App
