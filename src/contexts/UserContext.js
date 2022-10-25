import React, { useState } from 'react';
import { createContext } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.init";
import { useEffect } from 'react';

const auth=getAuth(app)

export const AuthContext=createContext()



const UserContext = ({children}) => {
    const googleProvider = new GoogleAuthProvider()
    const [user,setUser]=useState()
    const [loader,setLoader]=useState(true)

   const createUser=(email,password)=>{
    return  createUserWithEmailAndPassword(auth, email, password)
   }

useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (currentUser)=>{
        if(currentUser===null || currentUser.emailVerified){
            setUser(currentUser)
          }
            setLoader(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])


const signIn=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}

const logOut=()=>{
    return signOut(auth)
}
   
const googleSignIn=()=>{
    return signInWithPopup(auth, googleProvider)
}

    const authInfo={user,setUser,createUser,loader,setLoader,signIn,googleSignIn,logOut}
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default UserContext;