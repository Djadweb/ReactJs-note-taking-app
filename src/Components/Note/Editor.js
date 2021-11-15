import React from 'react';
import EditorJS from '@editorjs/editorjs'; 
import Header from '@editorjs/header'; 
import List from '@editorjs/list';
import Embed from '@editorjs/embed';

function Editor() {
    const editor = new EditorJS({          
        holder: 'editor-js',             
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
            },
            embed: {
                class: Embed,
                inlineToolbar: false,
                config: {
                    services: {
                        youtube: true,
                        coub: true
                    }
                }
            }
        },
        autofocus: true,
        placeholder: 'Write here...'
    });    

    // editor.isReady.then(() => {
    //     editor.save().then((data) => {
    //         console.log(data);
    //     }).catch((error) => {
    //         console.log(error);
    //     })
    // })

    return (
        
        <div className="note__editor" id="editor-js">
        
        </div>

    )
}

export default Editor
