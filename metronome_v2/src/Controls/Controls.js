import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import PlayButton from './PlayButton.jsx';
import StopButton from './StopButton.jsx';
import Form from 'react-bootstrap/Form'
import { MetronomeState } from "../context/MetronomeContext";


function TempoSelector() {
  const {tempo, setTempo} = MetronomeState()

  const handleSliderChange = (e) => {
    setTempo(e.target.value);
  };

  return (
    <div className = "outer">
        <div>
            <Form.Label>
                Range Slider
            </Form.Label>
            <Form.Range
              value={tempo}
              name='tempo'
              onChange={handleSliderChange}
              className="tempo-slider" 
              min="1"
              max="240"
            />
            <p>Selected Tempo: {tempo} BPM</p>
        </div>
    </div>
  );

}

function Controls() {
  const { state, setState} = MetronomeState()
  return (
    <div className="Controls">
      <header className="Controls-header">
        <div> 
          <TempoSelector />
        </div>
        <div>
          <h1>Current state: {state}</h1>
        </div>
      </header>
    </div>
  );
}
export default Controls;

