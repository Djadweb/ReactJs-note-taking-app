import Sidebar from "./Components/Sidebar/Sidebar";
import './App.scss';
import Note from "./Components/Note/Note";

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Note/>
    </div>
  );
}

export default App;
