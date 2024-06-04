import { useContext } from "react";
import UserContextProvider, { UserContext } from "./UserContext";
import './user.css';
function User() {
    return (
        <UserContextProvider>
            <Navbar />
            <section className="main-part">
                <MainComponent />
                <Sidebar />
            </section>
        </UserContextProvider>
    )
}
function Navbar() {
    const userDetail = useContext(UserContext);
    return (
        <>
            <nav className="navbar-list">
                <ul>
                    <li> <a href="http://www.google.com"> Home</a></li>
                    <li> <a href="http://www.google.com"> About</a></li>
                    <li> <a href="http://www.google.com"> Contact Us</a></li>
                </ul>
                <section style={{ display: "flex" }}>
                    <h3 className={userDetail.user.name.length > 0 ? "user-show" : "user-hide"}>User: {userDetail.user.name}</h3>
                    <Button>{userDetail.user.name.length > 0 ? "LogOut" : "LogIn"}</Button>
                </section>
            </nav>
        </>
    )
}
function MainComponent() {
    const userDetail = useContext(UserContext)
    return (
        <div >
            <div className={userDetail.user.name.length > 0 ? "user-show" : "user-hide"}>
                <h1>User: {userDetail.user.name}</h1>
                <p><h3 style={{ display: "inline" }}>Description : </h3>{userDetail.user.description}</p>
            </div>
            <LoginDetail />
        </div>
    )
}
function Sidebar() {
    const userDetail = useContext(UserContext);
    return (
        <div style={{ paddingInline: 50, backgroundColor: "#212121", color: "white", width: "10%" }} >
            <h1>John</h1>
            <p>{userDetail.user.description}</p>
        </div>
    )
}
function Button({ children }) {
    const userDetail = useContext(UserContext);
    return (
        <button style={{ height: 30, marginTop: 15, marginInline: 15 }} onClick={userDetail.user.name.length > 0 ? userDetail.logoutUser : userDetail.loginUser}> {children}</button>
    )
}
function LoginDetail() {
    const userDetail = useContext(UserContext);
    return (
        <div style={{ width: 500, border: "1px solid black", margin: 10 }}>
            <h1 style={{ paddingLeft: 70 }} className={userDetail.user.name.length > 0 ? "user-hide" : "user-show"}>Please LogIn</h1>
            <div className={userDetail.user.name.length > 0 ? "user-show" : "user-hide"}>
                <h1 style={{ paddingLeft: 70 }}>Well Come {userDetail.user.name}.</h1>
            </div>
        </div>
    )
}
export default User;