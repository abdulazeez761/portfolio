import { createContext, useState } from "react";

const BlureContects = createContext({});

export const BlureProvider = ({ children }) => {
    const [blure, SetBlure] = useState();
    return (
        <BlureContects.Provider value={{ blure, SetBlure }}>
            {children}
        </BlureContects.Provider>
    )
}

export default BlureContects;