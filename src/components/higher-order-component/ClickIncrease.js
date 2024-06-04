import { useState } from "react";
import UpdatedComponent from "./higherOrderFunction";

function ClickIncrease(props) {
  const [fontSize, setFontSize] = useState(16);
  const { counter, incrementCounter } = props;
  return (
    <div>
      <p>{props.userName}</p>
      <button onClick={() => setFontSize((size) => size + 1)}>
        Increase FontSize
      </button>
      <p style={{ fontSize }}>Fontsize is {fontSize}</p>
      <button onClick={() => incrementCounter()}>Increment Counter</button>
      <p>{counter}</p>
    </div>
  );
}
export default UpdatedComponent(ClickIncrease, 5);
