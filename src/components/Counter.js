import React, { useState, useEffect } from "react"

function Counter() {
    const initialCounter = 1;
    const [counter, setCounter] = React.useState(initialCounter);
    function counterDecrease() {
        setCounter(counter => counter - 1)
    }
    function counterIncrease() {
        setCounter(counter => counter + 1)

    }
    const counterReset = () => {
        setCounter(initialCounter)
    }
    return (
        <>
            <h1>Counter</h1>
            <input type="button" onClick={counterDecrease} value={"--"} />
            <>{counter}</>
            <input type="button" onClick={counterIncrease} value={"++"} />
            <input type="button" onClick={counterReset} value={"Reset"} />
            <Hello count={counter} />
        </>
    )
}
function Hello({ count }) {
    const [double, setDouble] = useState();
    useEffect(() => {
        setDouble(count * 2)
    }, [count])
    function name1() {
        return "Hello World"
    }
    const [name, setName] = useState(name1)
    const changeName = () => {
        setName((name === "Hello World") ? "React JS" : "Hello World")
    }
    return (
        <>
            <h1>{double}</h1>
            <button onClick={changeName}>Change Name</button>
        </>
    )
}
export default Counter;