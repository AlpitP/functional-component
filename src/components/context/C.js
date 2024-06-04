import { useContext } from "react";
import { CounterContext } from "./CounterContext";

function C() {
    const { increment, decrement } = useContext(CounterContext);
    return (
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}
export default C;