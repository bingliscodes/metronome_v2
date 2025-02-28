import logo from './logo.svg';
import './App.css';
import Controls from './Controls/Controls.js';
import Metronome from './Metronome.jsx';


function App() {
  return (
      <div className="App">
        <header className="App-header">
          <div> 
            <Controls/>
            <Metronome/>
          </div>
        </header>
      </div>
  );
}

export default App;
