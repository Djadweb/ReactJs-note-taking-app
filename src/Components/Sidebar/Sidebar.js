import React, { useContext } from 'react';
import Preview from '../Preview/Preview';
//import App from '../../App';
import './Sidebar.scss';
import { NotesContext } from '../Context/Context';


function Sidebar({checkNewNote}) {        
    const {notes} = useContext(NotesContext);

    const newNoteHandler = () => {
        checkNewNote('true');        
    }
    
    return (
        <div className="sidebar">
            <button onClick={() => newNoteHandler()} className="sidebar__new-note">NEW NOTE</button>     
            {notes !== null ? notes.map((note, index) => (
                <Preview key={index} note={note}/> 
            )) : "no notes"}            
        </div>
    )
}
//export const NewNoteContext = React.createContext();
export default Sidebar
