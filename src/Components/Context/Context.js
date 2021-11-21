import { createContext, useState } from "react";

export const NotesContext = createContext();

function NotesContextProvider(props) {
    const [notes, setNotes] = useState(localStorage.notes ? JSON.parse(localStorage.getItem("note")) : []);
    return(
        <NotesContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NotesContext.Provider>
    )
}

export default NotesContextProvider;