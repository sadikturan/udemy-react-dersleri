import { useEffect, useReducer } from "react";
import AddNote from "./AddNote";
import Navbar from "./Navbar";
import NoteList from "./NoteList";
import notesReducer from "../reducers/notesReducer";
import NotesContext from "../contexts/notesContext";

const NoteApp = () => {

    const [notes, dispatch] = useReducer(notesReducer, []);

    useEffect(() => {
        console.log("loaded");
        const data = JSON.parse(localStorage.getItem("notes"));
        if(data) {
            dispatch({ 
                type: "POPULATE_NOTES",
                notes: data
            })
        }
    },[]);

    useEffect(() => {
        console.log("updated");
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    return (
        <NotesContext.Provider value={ {notes, dispatch} }>
            <div className="container">
                <Navbar />
                <NoteList />
                <AddNote />
            </div>
        </NotesContext.Provider>
    );


};

export default NoteApp;