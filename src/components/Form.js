import React, { useState } from 'react';
import '../form.css'

function Form() {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [showData, setShowData] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    function submitHandler() {
        if (formData.name.length === 0 || formData.email.length === 0 || formData.password.length === 0) {
            setShowData(false);
        } else {
            setShowData(true);
        }
    }

    function changeStates(e) {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }
    // function changeName(e) {
    //     setName(e.target.value);
    // }
    // function changeEmail(e) {
    //     setEmail(e.target.value)
    // }
    // function changePassword(e) {
    //     setPassword(e.target.value)
    // }
    return (
        <div className='form'>
            <input type='text'
                placeholder='Enter Your Name'
                id='name'
                onChange={changeStates}
            />
            <input type='text'
                placeholder='Enter Your Email'
                id='email'
                onChange={changeStates}
            />
            <input type='text'
                placeholder='Enter Your Password'
                id='password'
                onChange={changeStates}
            />
            <button onClick={submitHandler}>Submit</button>
            {showData ? <pre>{`Name: ${formData.name} \nEmail: ${formData.email} \nPassword: ${formData.password}`}</pre> : null}

        </div>
    )
}
// create form and get data from form and store in useState
export default Form;