import { createContext, useState } from "react";

export const CounterContext = createContext();


function ContextProvider({ children }) {
    const [count, setCount] = useState(0);
    function increment() {
        setCount(count + 1)
    }
    function decrement() {
        setCount(count - 1)
    }
    return (
        <CounterContext.Provider value={{ count, increment, decrement }}>
            {children}
        </CounterContext.Provider>
    )
}
export default ContextProvider;