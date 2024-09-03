import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        checkIsLogin();
    }, [isLogin]);

    function checkIsLogin() {
        if (!localStorage.getItem("token")) {
            setIsLogin(false);
        } else {
            setIsLogin(true);
        }
    }

    return (
        <UserContext.Provider value={{ isLogin, setIsLogin }}>
            {children}
        </UserContext.Provider>
    );
}
