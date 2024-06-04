import { forwardRef, useImperativeHandle, useRef, useState } from "react";

function ParentComponent() {
    console.log("Component Render")
    const myRef = useRef();

    function clickHandler() {
        myRef.current.addValue();
    }
    function changeThemeHandler() {
        myRef.current.changeTheme();
    }
    function increment() {

        myRef.current.increment();
    }
    function decrement() {
        myRef.current.decrement();
    }
    return (
        <>
            <button onClick={clickHandler}>Click</button>
            <button onClick={changeThemeHandler}>Change Theme</button>
            <ChildComponent ref={myRef} placeholder={'Name'} />
            <button onClick={increment}>+ +</button>
            <button onClick={decrement}>- -</button>
        </>
    )
}

const ChildComponent = forwardRef(function ChildComponent(props, ref) {
    const [count, setCount] = useState(0);
    const inputRef = useRef();
    useImperativeHandle(ref, () => {
        return {
            addValue() {
                inputRef.current.value = "John";
            },
            changeTheme() {
                inputRef.current.style.padding = "10px";
                inputRef.current.style.margin = "10px";
            },
            increment() {
                setCount(count + 1)
            },
            decrement() {
                setCount(count - 1)
            }
        }
    }, [count]);
    function inputFocus() {
        inputRef.current.focus();
    }
    return (
        <>
            <button onClick={inputFocus}>Focus</button>
            <input type="text" ref={inputRef} {...props} />
            <h1>{count}</h1>

        </>
    )
})


export default ParentComponent;
