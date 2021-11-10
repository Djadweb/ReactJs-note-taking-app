import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import './Preview.scss';

function Preview() {
    return (
        <div className="preview">
            <div className="preview__note-info">
                <p className="title">New note title</p>
                <p className="header">this is a hea...</p>
            </div>
            <button className="preview__deleteBtn">
                <DeleteIcon/>
            </button>
        </div>
    )
}

export default Preview
