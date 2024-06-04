import { createContext, useState } from "react";

export const UserContext = createContext();
function UserContextProvider({ children }) {
    const userDetail = {
        name: 'John',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos fugiat magni minima! Ipsam, sit amet dolor neque quaerat repellat! Temporibus.'
    }
    const [user, setUser] = useState(userDetail);
    function loginUser() {
        setUser({ ...user, name: "John" })
    }
    function logoutUser() {
        setUser({ ...user, name: "" })
    }
    return (
        <UserContext.Provider value={{ user, loginUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider;