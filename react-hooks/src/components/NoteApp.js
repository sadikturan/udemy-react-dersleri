import AddNote from "./AddNote";
import Navbar from "./Navbar";
import NoteList from "./NoteList";
import NotesContextProvider from "../contexts/notesContext";

const NoteApp = () => {

    return (
        <NotesContextProvider>
            <div className="container">
                <Navbar />
                <NoteList />
                <AddNote />
            </div>
        </NotesContextProvider>
    );

};

export default NoteApp;