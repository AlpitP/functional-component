import React from 'react'

const ControlComponent = () => {
    console.log("Component Render")
    const [userName, setUserName] = React.useState('')
    const eventHandler = (e) => {
        setUserName(e.target.value)
        const userNameData = e.target.value;
        console.log(userNameData)
        console.log(typeof (e.target.value))
    }

    const submitFormEvent = (e) => {
        console.log(typeof (userName))
        console.log(e.target.querySelectorAll("input")[0].value)
        e.preventDefault();
        e.target.querySelectorAll("input")[0].value = "";
        if (userName === "") {
            alert("Please Enter Valid UserName")
        }
    }
    return (
        <>
            <h1 style={{ textAlign: "center" }}>Control Component</h1>
            <form onSubmit={submitFormEvent}>
                <input type="text"
                    placeholder='userName'
                    onChange={eventHandler} />
                <button >Submit</button>
            </form>
            <h3>UserName : {userName}</h3>
        </>
    )
}
export default ControlComponent;