import Sidebar from "./Components/Sidebar/Sidebar";
import './App.scss';
import Note from "./Components/Note/Note";
import { useState } from "react";
import NotesContextProvider from './Components/Context/Context';

function App() {
  //listen to click hook
  const [newNote, setNewNote] = useState(false);
  //get all note from local storage
  const [notes, setNotes] = useState(localStorage.notes ? JSON.parse(localStorage.getItem("note")) : []);
  
  //listen to add note event to show Note component
  const checkNewNote = (value) => {
    setNewNote(value);
  }

  // Clear the local storage
  window.onunload = () => {    
    localStorage.clear();
 }

  return (
    <NotesContextProvider>
      <div className="App">
        <Sidebar checkNewNote={checkNewNote}/>
        {newNote && <Note/>}      
      </div>
    </NotesContextProvider>
  );
}

export default App;
