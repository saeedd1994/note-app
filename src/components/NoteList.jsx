function NoteList({notes, OnDeleteNote}) {
    return (
        <div className="note-list">
            {
                notes.map(note => <NoteItem key={note.id} onDeleteNote={OnDeleteNote} o note={note}/>)
            }
        </div>
    )
}

export default NoteList;

function NoteItem({note, onDeleteNote}) {
    const dateOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }
    return <div className="note-item">
        <div className="note-item__header">
            <div>
                <p className="title">{note.title}</p>
                <p className="desc">{note.desc}</p>
            </div>
            <div className="actions">
                <button onClick={() => onDeleteNote(note.id)}>❌</button>
                <input type="checkbox"/>
            </div>
        </div>
        <div className="note-item__footer">
            {new Date(note.createdAt).toLocaleDateString("en-US", dateOptions)}
        </div>
    </div>
}