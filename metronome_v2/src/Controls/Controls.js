import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import PlayButton from './PlayButton.jsx';
import StopButton from './StopButton.jsx';
import Form from 'react-bootstrap/Form'
import { MetronomeState } from "../context/MetronomeContext";


function TempoSelector() {
  const [sliderValue, setSliderValue] = useState(100);

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  return (
    <div className = "outer">
        <div>
            <Form.Label>
                Range Slider
            </Form.Label>
            <Form.Range
              value={sliderValue}
              name='tempo'
              onChange={handleSliderChange}
              className="tempo-slider" 
              min="1"
              max="240"
            />
            <p>Selected Tempo: {sliderValue} BPM</p>
        </div>
    </div>
  );

}

function Controls() {
  const { state, _ } = MetronomeState()
  return (
    <div className="Controls">
      <header className="Controls-header">
        <div> 
          <TempoSelector />
        </div>
        <div>
          <PlayButton/>
          <StopButton/>
          <h1>Current state: {state}</h1>
        </div>
      </header>
    </div>
  );
}
export default Controls;

