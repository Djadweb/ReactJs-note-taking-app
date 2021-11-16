import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function Editor({getNote}) {
    return (        
        <div className="note__editor" id="editor-js">
            <CKEditor
                    editor={ ClassicEditor }                                        
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        getNote(data);
                    } }
                   
                />
        </div>
    )
}

export default Editor
