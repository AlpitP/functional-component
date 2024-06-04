import { useState } from "react";

export default function useFormHandle(initialValue) {
    const [value, setValue] = useState(initialValue);
    function handlerChange(e) {
        setValue(e.target.value);
    }
    const inputProps = {
        value: value,
        onChange: handlerChange
    }
    return inputProps;
}