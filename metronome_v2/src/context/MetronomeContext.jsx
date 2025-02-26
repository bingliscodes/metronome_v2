import { createContext, useContext, useState, useEffect } from "react";

const MetronomeContext = createContext();

export default function MetronomeContextProvider ({ children }){
    const [state, setState] = useState('');
    
    return (
        <MetronomeContext.Provider
            value={{
                state,
                setState,
            }}
        >
            {children}
        </MetronomeContext.Provider>
    );
}

export const MetronomeState = () => {
    return useContext(MetronomeContext);
};