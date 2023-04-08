import Note from "./Note";

const NoteList = ({ notes, removeNote }) => {
    return (
        <ul className="note-list">
            { notes.map(note => { return (<Note note={note} key={ note.id } removeNote={removeNote} />); }) }
        </ul>
    );

}

export default NoteList;