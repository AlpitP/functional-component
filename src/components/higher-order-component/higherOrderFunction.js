import { useState } from "react";

const UpdatedComponent = (OriginalComponent, increaseCount) => {
    function NewComponent(props) {
        const [counter, setCounter] = useState(0);
        return <OriginalComponent counter={counter} incrementCounter={() => setCounter(counter => counter + increaseCount)} {...props} />
    }
    return NewComponent;
}
export default UpdatedComponent;