import './App.css'
import AddNewNote from "./components/AddNewNote.jsx";

function App() {
  return (
    <div className='container'>
        <div className="note-header">note header</div>
        <div className="note-app">
            <AddNewNote/>
            <div className="add-new-note">add a new note</div>
            <div className="note-container">note list</div>
        </div>
    </div>
  )
}

export default App
