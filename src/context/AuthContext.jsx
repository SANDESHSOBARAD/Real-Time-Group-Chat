import { createContext, useContext, useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import {auth} from "../firebase";
import { signInWithRedirect } from "firebase/auth";
//Create context
const AuthContext = createContext();

//provider Context

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children}) => {
    const [currUser, setCurrUser] = useState(null);
    console.log(currUser)
    console.log('hello')

    //sign in with google
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider)

    }

    const value = {
        currUser,
        setCurrUser,
        signInWithGoogle
    }

    //set current user

    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setCurrUser(user);
        });
        return unSubscribe;
    }, []);


    return (
        <AuthContext.Provider value = {value}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () =>{
    return useContext(AuthContext);
}