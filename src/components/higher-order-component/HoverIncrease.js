import { useState } from "react"
import UpdatedComponent from "./higherOrderFunction";

function HoverIncrease(props) {
    const [fontSize, setFontSize] = useState(16);
    const { counter, incrementCounter } = props
    return (
        <div>
            <button onMouseEnter={() => setFontSize(size => size + 1)}>MouseEnter FontSize</button>
            <p style={{ fontSize }}>Fontsize is {fontSize}</p>
            <button onClick={() => incrementCounter()}>Increment Counter</button>
            <p>{counter}</p>
        </div>
    )
}

export default UpdatedComponent(HoverIncrease, 1);