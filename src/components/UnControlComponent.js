import React, { useEffect } from 'react';

const UnConditionalComponent = () => {
    const userNameRef = React.useRef('')
    useEffect(() => {
        console.log(userNameRef.current.value);
    })
    const submitFormEventHandler = (e) => {
        e.preventDefault();
        userNameRef.current.value = "";
    }
    const clickEventHandler = () => {
        if (userNameRef.current.value === "") {
            alert("please Enter UserName")
        }
    }
    const inputEventHandler = () => {
        console.log("input Change")
        console.log(userNameRef.current.value)
    }
    console.log("Component Render")
    return (
        <>
            <h1 style={{ textAlign: "center" }}>UnControl Component</h1>
            <form onSubmit={submitFormEventHandler}>
                <input type="text"
                    placeholder='UserName'
                    ref={userNameRef}
                    onChange={inputEventHandler}
                />
                <button onClick={clickEventHandler}>Submit</button>
            </form>
            <strong>{userNameRef.current.value}</strong>
        </>
    )
}
export default UnConditionalComponent;