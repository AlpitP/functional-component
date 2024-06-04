import React, { createContext, useContext, useState } from 'react';
import './themeToggle.css'

const MyContext = createContext();

export default function ThemeToggle() {
    const [theme, setTheme] = useState('light');
    return (
        <>
            <MyContext.Provider value={theme}>
                <Form />
            </MyContext.Provider>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} >Change Theme</button>
        </>
    )
}
function Form() {
    const themeStyle = useContext(MyContext);
    return (
        <div style={{ border: "1px solid black", width: 130, paddingInline: 130, margin: 10 }} className={themeStyle}>
            <Container title={"Welcome"} >
                <Button text={"SignUp"} />
                <Button text={"LogIn"} />
            </Container>
        </div>
    )
}
function Container({ title, children }) {
    const titleStyle = useContext(MyContext);
    return (
        <>
            <h1 className={'title-' + titleStyle}>{title}</h1>
            {children}
        </>
    )
}
function Button({ text }) {
    const buttonStyle = useContext(MyContext);
    return (
        <button className={'button-' + buttonStyle}>{text}</button>
    )
}