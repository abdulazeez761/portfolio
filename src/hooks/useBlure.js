import { useContext, useDebugValue } from "react";
import BlurContext from "../context/blureContext";

const useBlure = () => {
    const { Blure } = useContext(BlurContext);
    return useContext(BlurContext);
}

export default useBlure;