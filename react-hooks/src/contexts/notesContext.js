import React from "react";
import { useEffect, useReducer } from "react";
import notesReducer from "../reducers/notesReducer";

export const NotesContext = React.createContext();

const NotesContextProvider = (props) => {
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
        <NotesContext.Provider value={{ notes, dispatch }}>
            { props.children }
        </NotesContext.Provider>
    );
}

export default NotesContextProvider;