import React, { useState, useContext } from 'react';
import Editor from './Editor';
import EditIcon from '@mui/icons-material/Edit';
import './Note.scss';
import { NotesContext } from '../Context/Context';

function Note() {    
    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");
    //const [notes, setNotes] = useState(localStorage.notes ? JSON.parse(localStorage.getItem("note")) : []);
    const {notes, setNotes} = useContext(NotesContext);

    const handleTitle = (e) => {        
        setTitle(e.target.value);
    }

    const getNote = (value) => {
        setValue(value);
    }

    // useEffect(() => {
    //     localStorage.setItem("notes", JSON.stringify(notes));           
    // }, [notes])

    const saveNote = () => {
        const note = {
            title : title,
            value : value
        }                
        setNotes([note, ...notes]);                           
    }

    return (
        <div className="note">            
            <div className="note__header">
                <div className="edit-icon">
                    <EditIcon/>
                </div>
                <button onClick={() => saveNote()} className="saveBtn">Save</button>
                {/* <button onClick={(e) => handleTitle(e)} className="note-title">{title}</button> */}
                <input className="note-title" onChange={(e) => handleTitle(e)} placeholder="New Note" value={title}/>
            </div>            
            <Editor getNote={getNote}/>
        </div>
        
    )
}

export default Note
