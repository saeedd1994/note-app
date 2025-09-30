function NoteStatus({notes}) {
    const allNotes = notes.length;
    const completedNotes = notes.filter((note) => note.completed).length;
    const openNotes = allNotes - completedNotes;
    if (!allNotes) {
        return <h2>No Notes Has Already Been Added...</h2>
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