import React, { useState } from 'react';
import Editor from './Editor';
import EditIcon from '@mui/icons-material/Edit';
import './Note.scss';

function Note() {    
    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");

    const handleTitle = (e) => {        
        setTitle(e.target.value);
    }

    const getNote = (value) => {
        setValue(value);
    }

    const saveNote = () => {
        const note = {
            title : title,
            value : value
        }
        console.log(note)
        let notes;
        console.log(notes)
        if(localStorage.getItem("notes") === null) {
            notes = [];
            console.log(notes)
        } else {
            notes = JSON.parse(localStorage.getItem("notes"));        
            console.log(notes)
        }
        console.log(notes)
        
        notes.push(note);console.log(notes)
        localStorage.setItem("notes", JSON.stringify(notes));
        console.log(JSON.parse(localStorage.getItem("notes")));            
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
