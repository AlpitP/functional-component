import { useState } from "react";

function useToggle(defaultValue) {
    const [value, setValue] = useState(defaultValue);
    function toggleValue() {
        setValue(value === false ? true : false);
    }
    return [value, toggleValue];
}
export default useToggle;