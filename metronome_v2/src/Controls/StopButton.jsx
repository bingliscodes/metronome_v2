import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { MetronomeState } from "../context/MetronomeContext";
 
export default function StopButton() {
    const { state, setState } = MetronomeState()

    const handleStop = () => {
        setState("off");
    };

    return (
        <div className="controlButton">
            <Button variant="danger" onClick={handleStop}>Stop</Button>
        </div>
    );
}