import { forwardRef, useRef } from "react";

const ParentRef = () => {
    const myRef = useRef();
    console.log(myRef.current);
    const clickHandler = () => {
        myRef.current.focus();
    }
    return (
        <>
            <ChildRef ref={myRef} placeholder={"Enter Your Name"} />
            <button onClick={clickHandler}>Click</button>
        </>
    )
}
const ChildRef = forwardRef(function ChildRef(props, ref) {
    return (
        <input type="text" ref={ref} {...props} />
    )
})
export default ParentRef