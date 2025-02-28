import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import Form from "react-bootstrap/Form";
import { MetronomeState } from "./context/MetronomeContext";
import Button from "react-bootstrap/Button";
import sound from "./media/Synth_Block_E_lo.wav";

//Below code adapted from https://stackoverflow.com/questions/62512755/accurately-timing-sounds-in-browser-for-a-metronome
function noteDurationToMs(bpm, dur, type) {
  return (60000 * 4 * dur * type) / bpm;
}

function scheduleNote(ac, time, dur) {
  var osc = ac.createOscillator();
  osc.connect(ac.destination);
  osc.start(time);
  osc.stop(time + dur);
}

const ac = new AudioContext();
let to,
  lastNote = 0;

//TODO: Refactor tempo --> BPM
export default function Metronome() {
  const { state, setState, tempo, setTempo } = MetronomeState();
  const [dur, setDur] = useState(1);
  const [type, setType] = useState(1);

  const handleChangeDur = (e) => {
    setDur(e.target.value);
  };

  const handleChangeType = (e) => {
    setType(e.target.value);
  };

  const step = noteDurationToMs(tempo, dur, type) / 1000;
  const lookAhead = step / 2;

  const timer = () => {
    const diff = ac.currentTime - lastNote;
    if (diff >= lookAhead) {
      const nextNote = lastNote + step;
      scheduleNote(ac, nextNote, 0.025);
      lastNote = nextNote;
    }
  };

  const start = () => {
    ac.resume();
    setState("on");
  };

  const stop = () => {
    clearInterval(to);
    setState("off");
  };

  const toggle = () => {
    state == "on" ? stop() : start();
  };

  useEffect(() => {
    if (state == "on") {
      clearInterval(to);
      to = setInterval(timer, step / 4);
    }
  });

  return (
    <div>
      <Form.Select
        aria-label="Duration"
        id="dur"
        onChange={handleChangeDur}
        value={dur}
      >
        <option value={1}>Whole</option>
        <option value={1 / 2}>1/2</option>
        <option value={1 / 4}>1/4</option>
        <option value={1 / 8}>1/8 </option>
        <option value={1 / 16}>1/16</option>
        <option value={1 / 32}>1/32</option>
      </Form.Select>

      <Form.Select
        aria-label="Type"
        id="typ"
        onChange={handleChangeType}
        value={type}
      >
        <option value={1}>Regular</option>
        <option value={3 / 2}>Dotted</option>
        <option value={2 / 3}>Triplet</option>
      </Form.Select>
      <Button onClick={toggle}>{state == "off" ? "Start" : "Stop"}</Button>
      <br />
      <label for="ms">MS:</label>
      <output id="ms">{noteDurationToMs(tempo, dur, type)}</output>
    </div>
  );
}
