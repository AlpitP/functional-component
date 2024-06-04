import { useEffect, useState } from "react";

function useTheme(defaultTheme) {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || defaultTheme);

    useEffect(() => {
        document.documentElement.setAttribute('class', theme);
        localStorage.setItem('theme', theme);
    }, [theme])

    return [theme, setTheme];
}
export default useTheme;