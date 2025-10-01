import './App.css'
import AddNewNote from "./components/AddNewNote.jsx";
import NoteList from "./components/NoteList.jsx";
import {useState} from "react";
import NoteStatus from "./components/NoteStatus.jsx";
import NoteHeader from "./components/NoteHeader.jsx";

function App() {
    const [note, setNote] = useState([])
    const [sortBy, setSortBy] = useState('latest')
    const handleSetNote = (newNote) => {
        setNote(prevNote => [...prevNote, newNote])
    }

    const handleDeleteNote = (id) => {
        setNote(prevNote => prevNote.filter(item => item.id !== id))
    }

    const handleCompleteNote = (e) => {
        const noteId = Number(e.target.value);
        setNote(prevNote => prevNote.map(item => item.id === noteId ? {...item, completed: !item.completed} : item))
    }

    return (
        <div className='container'>
            <NoteHeader notes={note} value={sortBy} onSort={e => setSortBy(e.target.value)}/>
            <div className="note-app">
                <AddNewNote onHandleSetNote={handleSetNote}/>
                <div className="note-container">
                    <NoteStatus notes={note}/>
                    <NoteList notes={note} sortBy={sortBy}
                              OnDeleteNote={handleDeleteNote}
                              onComplete={handleCompleteNote}/>
                </div>
            </div>
        </div>
    )
}

export default App
