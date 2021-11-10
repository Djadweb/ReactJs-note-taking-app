import React from 'react';
import Preview from '../Preview/Preview';
import './Sidebar.scss';

function Sidebar() {
    return (
        <div className="sidebar">
            <button className="sidebar__new-note">NEW NOTE</button>     
            <Preview/>       
            <Preview/>       
            <Preview/>       
            <Preview/>       
        </div>
    )
}

export default Sidebar
