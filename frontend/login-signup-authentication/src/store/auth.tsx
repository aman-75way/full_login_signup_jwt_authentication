import { createContext, useContext } from "react";

export const AuthContext = createContext({});


export const AuthProvider = ({children} : any) => {
    
    const storeTokenInLocalStorage = (serverToken : string)=>{
        return localStorage.setItem("token" , serverToken);
    }
    

    return 
    <AuthContext.Provider value={storeTokenInLocalStorage}>
        { children }
    </AuthContext.Provider>
}


export const useAuth = ()=>{
    return useContext(AuthContext);
}




