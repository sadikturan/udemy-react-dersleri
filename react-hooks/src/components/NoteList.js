import Note from "./Note";

const NoteList = ({ notes, dispatch }) => {
    return notes.length > 0 ? 
    (
        <div className="note-list">
            <ul>
                { notes.map(note => { return (<Note note={note} key={ note.id } dispatch={dispatch} />); }) }
            </ul>
        </div>
    ) : 
    (
        <div className="empty">Henüz not eklemediniz.</div>
    );

}

export default NoteList;