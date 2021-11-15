import React from 'react';
import Preview from '../Preview/Preview';
//import App from '../../App';
import './Sidebar.scss';

function Sidebar({checkNewNote}) {
    const newNoteHandler = () => {
        checkNewNote('true');
    }
    return (
        <div className="sidebar">
            <button onClick={() => newNoteHandler()} className="sidebar__new-note">NEW NOTE</button>     
            <Preview/> 
            {/* <NewNoteContext.Provider value={newNote}>
                <App/>
            </NewNoteContext.Provider>                       */}
        </div>
    )
}
//export const NewNoteContext = React.createContext();
export default Sidebar
