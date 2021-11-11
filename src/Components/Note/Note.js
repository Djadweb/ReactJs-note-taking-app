import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import EditorJS from '@editorjs/editorjs'; 
import Header from '@editorjs/header'; 
import List from '@editorjs/list';
import './Note.scss';

function Note() {
    const handleNewNote = () => {
        const editor = new EditorJS({        
            holder: 'editorjs',
            tools: {
                header: {
                    class: Header,
                    inlineToolbar: ['link']
                },
                list: {
                    class: List,
                    inlineToolbar: [
                        'link',
                        'bold'
                    ]
                }
            },
            autofocus: true,
            placeholder: 'Write here...'
        });    
    }

    // async function checkEditor() {
    //     await editor.isReady;
    //     console.log('the editor is ready');
    // }
    // checkEditor();

    return (
        <div className="note">
            <button onClick={() => handleNewNote()}>new note</button>
            <div className="note__header">
                <div className="edit-icon">
                    <EditIcon/>
                </div>
                <div className="note-title">New note</div>
            </div>
            <div className="note__editor" id="editorjs"></div>
        </div>
    )
}

export default Note
