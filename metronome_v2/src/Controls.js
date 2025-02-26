
import logo from './logo.svg';
import './App.css';
import './Button.css'
import TypesExample from './Button';

function Controls() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div> 
          <button type="button" class="btn btn-dark">Start Metronome</button>
        </div>
        <div>
          <TypesExample />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Controls;
