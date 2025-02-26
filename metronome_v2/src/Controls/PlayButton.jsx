import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { MetronomeState } from "../context/MetronomeContext";
 
export default function PlayButton() {
    const { state, setState } = MetronomeState()

    const handlePlay = () => {
        setState("on");
    };

    return (
        <div className="controlButton">
            <Button variant="success" onClick={handlePlay}>Play</Button>
        </div>
    );
}