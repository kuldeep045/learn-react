import { createContext } from "react";
import {doctors} from "../assets.js"

const docContext = createContext()

const DocContextProvider = (props) => {

    const value = {
        doctors
    }
    return <docContext.Provider value={value}>
        {props.children}
    </docContext.Provider>
}
export  {docContext, DocContextProvider}