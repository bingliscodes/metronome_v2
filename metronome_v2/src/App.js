import logo from './logo.svg';
import './App.css';
import Controls from './Controls/Controls.js';
import AudioPlayer from './Metronome.jsx';


function App() {
  return (
      <div className="App">
        <header className="App-header">
          <div> 
            <Controls/>
            <AudioPlayer/>
          </div>
        </header>
      </div>
  );
}

export default App;
