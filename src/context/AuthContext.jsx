import { createContext, useContext, useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase";
//Create context
const AuthContext = createContext();

//provider Context

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children}) => {
    const [currUser, setCurrUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //sign in with google
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)

    }

    //signout
    const logout = () => signOut(auth);

    const value = {
        currUser,
        setCurrUser,
        signInWithGoogle,
        logout

    }

    //set current user

    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            //console.log("auth state changed, user:", user.email);
            setCurrUser(user);
            setLoading(false);
        });
        return unSubscribe;
    }, []);


    return (
        <AuthContext.Provider value = {value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () =>{
    return useContext(AuthContext);
}