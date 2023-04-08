import { useState } from "react";

const AddNote = ({ newNote }) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        newNote(title, description);
        setTitle('');
        setDescription('');
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input type="text"  value={title} onChange={ (e) => setTitle(e.target.value) } placeholder="Title" />
            <input type="text"  value={description} onChange={ (e) => setDescription(e.target.value) }  placeholder="Description" />
            <input type="submit" value="Add Note" />
        </form>
    );


}

export default AddNote;