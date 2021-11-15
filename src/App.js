import Sidebar from "./Components/Sidebar/Sidebar";
import './App.scss';
import Note from "./Components/Note/Note";
import { useState } from "react";

function App() {
  const [newNote, setNewNote] = useState(false);
  
  const checkNewNote = (value) => {
    setNewNote(value);
  }
  return (
    <div className="App">
      <Sidebar checkNewNote={checkNewNote}/>
      {newNote && <Note/>}      
    </div>
  );
}

export default App;
