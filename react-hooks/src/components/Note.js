const Note = ({ note, dispatch }) => {

    const removeNote = (id) => {
        dispatch({
            type: "REMOVE_NOTE",
            id
        })
    }

    return (
    <li onClick={ () => removeNote(note.id) } key={note.id}>
        <h1 className="title">
            { note.title }
        </h1> 
        <p>{ note.description }</p>
    </li>);
}

export default Note;