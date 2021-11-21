import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import './Preview.scss';

function Preview({note}) {
    return (
        <div className="preview">
            <div className="preview__note-info">
                <p className="title">{note.title}</p>
                <p className="header">{note.value}</p>
            </div>
            <button className="preview__deleteBtn">
                <DeleteIcon/>
            </button>
        </div>
    )
}

export default Preview
