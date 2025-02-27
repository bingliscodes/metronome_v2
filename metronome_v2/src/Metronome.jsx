import React, { useState } from "react";
import useSound from 'use-sound';
import { MetronomeState } from "./context/MetronomeContext";
import Button from 'react-bootstrap/Button';
import sound from './media/Synth_Block_E_lo.wav'
 
export default function AudioPlayer() {
    const { state, _ } = MetronomeState();
    var audio = new Audio(sound);

    const start = () => {
        if (state == "on")
            audio.play();
    }

    return (
        < div>
            <Button variant="dark" onClick={start}>Play Click</Button>
        </div>
    );
}