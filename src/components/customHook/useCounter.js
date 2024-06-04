import { useState } from "react";

function useCounter(initialValue, { min, max }) {
    const [count, setCount] = useState(initialValue);
    // const increment = useCallback(() => {
    //     setCount(c => c + 1)
    // }, [])
    // const decrement = useCallback(() => {
    //     setCount(c => c - 1);
    // }, [])
    // const reset = useCallback(() => {
    //     setCount(initialValue);
    // }, [initialValue])

    function increment() {
        if (count < max) {
            setCount(c => c + 1)
        }
    }
    function decrement() {
        if (count > min) {
            setCount(c => c - 1)
        }
    }
    function reset() {
        setCount(initialValue)
    }


    return [count, increment, decrement, reset];
}
export default useCounter;