import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalProvider = (props) => {

    const [ input, setInput ] = useState({
        username: null
    })

    let state = {input, setInput}

    return (
        <GlobalContext.Provider value={
            {
                state,
            }
        }>
            {props.children}
        </GlobalContext.Provider>
    )
}