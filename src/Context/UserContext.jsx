import { createContext, useState } from "react";

export const UserContext=createContext();

export const UserContextProvider=({children})=>{
    const [isLogin,setIsLogin]=useState(false);

    return(
        <UserContext.Provider value={{isLogin,setIsLogin}}>
            {
                children
            }
        </UserContext.Provider>
    )
}

