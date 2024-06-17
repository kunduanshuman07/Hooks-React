import React, { useContext, useState } from 'react'
import { createContext } from 'react'


const ColorContext = createContext();

export const ContextHookProvider = ({children}) => {
    const [color, setColor] = useState("blue");

  return (
    <ColorContext.Provider value={{color, setColor}}>
        {children}
    </ColorContext.Provider>
  )
}

export const useColor = () => {
    const context = useContext(ColorContext);
    return context;
}
