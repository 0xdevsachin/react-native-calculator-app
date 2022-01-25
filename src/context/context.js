import React, { createContext, useState } from "react";

const StateContext = createContext();


export const StateProvider = (props) =>{
    const [res, setResult] = useState(0);
    const [input, setInput] = useState('');
    return (
        <StateContext.Provider value={{res,setResult, input, setInput}} >
            {props.children}
        </StateContext.Provider>
    )
}

export default StateContext;