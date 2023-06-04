import axios from "axios";
import { createContext, useEffect, useState } from "react";

// 1.Context yaradilmali
export const GlobalContext = createContext()

export const ContextProvider = ({ children }) => {
    const [text, setText] = useState('Hello')

    useEffect(()=>{
        axios.get('')
    }, [])
    return (
        <GlobalContext.Provider value={{ text, setText }}>
            {children}
        </GlobalContext.Provider>
    )
}