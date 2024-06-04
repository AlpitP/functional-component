import { useMemo, useState } from "react";

function UseMemoComponent() {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [inr, setInr] = useState(0);

    const ans = useMemo(() => {
        console.log("Calculate function.");
        return number1 + number2;
    }, [number1, number2])
    return (
        <>
            <h1>UseMemo</h1>
            <input type="number" onChange={(e) => setNumber1(Number(e.target.value))} />
            <input type="number" onChange={(e) => setNumber2(Number(e.target.value))} />
            <button onClick={() => setInr(inr + 1)}>Re-render</button><hr />
            <ChildComponent ans={ans} />
        </>
    )
    // 
}
function ChildComponent({ ans }) {
    return (
        <div>{ans}</div>
    )
}

// function sum(number1, number2) {
//     console.log("sum function call");
//     let sum = number1 + number2
//     return sum;
// }
export default UseMemoComponent;