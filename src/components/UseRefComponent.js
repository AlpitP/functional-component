import { forwardRef, useRef, useState } from 'react';

const UseRefComponent = () => {
    const inputRef = useRef(null);
    return (
        <>
            <MyInput ref={inputRef} placeholder="Name" />
            <Form />
            <Counter />
        </>
    )
}
const MyInput = forwardRef((props, ref) => {
    function focusInput() {
        ref.current.focus();
    }
    return (
        <div>
            <input type="text" ref={ref} {...props} />
            <button onClick={focusInput}>
                Focus
            </button>
        </div>
    )
})
const Form = () => {
    const nameRef = useRef("");
    const [name, setName] = useState("");
    const submitForm = (e) => {
        e.preventDefault();
        setName(nameRef.current.value)
        nameRef.current.value = "";
    }
    return (
        <form onSubmit={submitForm}>
            <input type="text" placeholder='Name' ref={nameRef} />
            <input type="submit" value="Submit" />
            <p>Name : {name}</p>
        </form>
    )
}
const Counter = () => {
    const counterRef = useRef(0)
    console.log(counterRef)
    const counterIncrement = () => {
        counterRef.current++;
        console.log(counterRef)
    }
    return (
        <>
            <button onClick={counterIncrement}>Click</button>
            <h3>{counterRef.current}</h3>
        </>
    )
}
export default UseRefComponent;