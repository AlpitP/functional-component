import React, { createContext, useContext } from "react";
import B from "./B";
import ContextProvider, { CounterContext } from "./CounterContext";

function A() {
    const count = useContext(CounterContext);
    return (
        <>
            <div>{count}</div>
            <ContextProvider>
                <div>Counter</div>
                <B />
            </ContextProvider>
            <AbcComponent />
        </>
    )
}
const AbcContext = createContext();

function AbcComponent() {
    return (
        <>
            <Abc />
            <AbcContext.Provider value={1}>
                <Abc />
                <AbcContext.Provider value={2}>
                    <Abc />
                    <AbcContext.Provider value={3}>
                        <Abc />
                    </AbcContext.Provider>
                </AbcContext.Provider>
            </AbcContext.Provider>
        </>
    )
}
function Abc() {
    const number = useContext(AbcContext);
    return (
        // <AbcContext.Consumer>
        //     {value => <div>{value}</div>}
        // </AbcContext.Consumer>
        <div>{number}</div>
    )
}
export default A;