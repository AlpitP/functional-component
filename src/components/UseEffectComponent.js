import React, { useEffect, useState } from "react";

function UseEffectComponent() {
    const [number, setNumber] = useState(0)
    const [hide, setHide] = useState(true)
    console.log("Outer log")

    useEffect(() => {
        console.log("inner Log")
        // console.log("useEffect run")
        // if (!hide) {
        //     return;
        // }

        // console.log(number)
        // return () => {
        //     console.log("component unMound")
        // }
    }, [hide]);
    function hideNumber() {
        setHide(!hide);
    }
    function incrementCounter() {
        setNumber(prevNumber => prevNumber + 1)
    }
    const decrementCounter = () => {
        setNumber(prevNumber => prevNumber - 1)
    }
    return (
        <>
            <h1>useEffect</h1>
            <button onClick={decrementCounter}>Decrement</button>
            {hide ? <p>{number}</p> : null}
            <button onClick={incrementCounter}>Increment</button>
            <button onClick={hideNumber}>Click</button>
        </>
    )
}
export default UseEffectComponent;