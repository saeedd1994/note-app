function NoteList({notes, OnDeleteNote, onComplete, sortBy}) {

    let sortedNotes = notes;
    if (sortBy === 'earliest') {
        sortedNotes = [...sortedNotes].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
    }
    if (sortBy === 'latest') {
        sortedNotes = [...sortedNotes].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    }

    if (sortBy === 'completed') {
        sortedNotes = [...sortedNotes].sort((a, b) => Number(b.completed) - Number(a.completed))
    }

    return (
        <div className="note-list">
            {
                sortedNotes.map(note => <NoteItem key={note.id} onDeleteNote={OnDeleteNote} note={note} onComplete={onComplete}/>)
            }
        </div>
    )
}

export default NoteList;

function NoteItem({note, onDeleteNote, onComplete}) {
    const dateOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }
    return <div className={`note-item ${note.completed ? "completed" : ""}`}>
        <div className="note-item__header">
            <div>
                <p className="title">{note.title}</p>
                <p className="desc">{note.desc}</p>
            </div>
            <div className="actions">
                <button onClick={() => onDeleteNote(note.id)}>❌</button>
                <input type="checkbox" checked={note.completed} value={note.id} onChange={onComplete}/>
            </div>
        </div>
        <div className="note-item__footer">
            {new Date(note.createdAt).toLocaleDateString("en-US", dateOptions)}
        </div>
    </div>
}