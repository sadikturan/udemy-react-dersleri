import { useEffect, useState } from "react";
import AddNote from "./AddNote";

const NoteList = () => {

    const [notes, setNotes] = useState([
        { id: 1, title: "note 1" },
        { id: 2, title: "note 2" },
        { id: 3, title: "note 3" }
    ]);

    useEffect(() => {
        console.log("loaded");
        const data = JSON.parse(localStorage.getItem("notes"));
        if(data) {
            setNotes(data);
        }
    },[]);

    useEffect(() => {
        console.log("updated");
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    const newNote = (title) => {
        setNotes([...notes, { id: notes.length + 1, title: title }]);
    }

    return (
        <>
            <ul className="note-list">
                { notes.map(note => {
                    return (
                        <li key={note.id}>{ note.title }</li>
                        );
                    }) }
            </ul>
            <AddNote newNote={ newNote }/>
        </>
    );


};

export default NoteList;