import { createContext, useContext, useState, useEffect } from "react";

const MetronomeContext = createContext();

export default function MetronomeContextProvider ({ children }){
    const [state, setState] = useState('');
    const [tempo, setTempo] = useState(100);
    
    return (
        <MetronomeContext.Provider
            value={{
                state,
                setState,
                tempo,
                setTempo,
            }}
        >
            {children}
        </MetronomeContext.Provider>
    );
}

export const MetronomeState = () => {
    return useContext(MetronomeContext);
};