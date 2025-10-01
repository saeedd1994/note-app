import Message from "./Message.jsx";

function NoteStatus({notes}) {
    const allNotes = notes.length;
    const completedNotes = notes.filter((note) => note.completed).length;
    const openNotes = allNotes - completedNotes;
    if (!allNotes) {
        return (<Message>
            <span>ℹ️</span>  No Notes Has Already Been Added...
        </Message>)
    }
    return (
        <ul className="note-status">
            <li>all <span>{allNotes}</span></li>
            <li>completed <span>{completedNotes}</span></li>
            <li>open <span>{openNotes}</span></li>
        </ul>
    )
}

export default NoteStatus;