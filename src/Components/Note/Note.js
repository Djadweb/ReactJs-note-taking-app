import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import './Note.scss';

function Note() {
    return (
        <div className="note">
            <div className="note__header">
                <div className="edit-icon">
                    <EditIcon/>
                </div>
                <div className="note-title">New note</div>
            </div>
        </div>
    )
}

export default Note
