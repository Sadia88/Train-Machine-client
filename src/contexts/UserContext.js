import React, { useState } from 'react';
import { createContext } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut, sendEmailVerification, GithubAuthProvider, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.init";
import { useEffect } from 'react';

const auth=getAuth(app)

export const AuthContext=createContext()



const UserContext = ({children}) => {
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider();
    const [user,setUser]=useState()
    const [loader,setLoader]=useState(true)

   const createUser=(email,password)=>{
    return  createUserWithEmailAndPassword(auth, email, password)
   }

 

useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (currentUser)=>{
        if(currentUser===null || currentUser?.uid){
            setUser(currentUser)
          }
            setLoader(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])


const signIn=(email,password)=>{
    setLoader(true)
    return signInWithEmailAndPassword(auth,email,password)
}

const UserProfile=()=>{
    return auth.currentUser;
}

const verifyEmail=()=>{
    setLoader(true)
    return sendEmailVerification(auth.currentUser)
}

const logOut=()=>{
    setLoader(true)
    return signOut(auth)
}
   
const googleSignIn=()=>{
    setLoader(true)
    return signInWithPopup(auth, googleProvider)
}

const githubSignIn=()=>{
    setLoader(true)
    return signInWithPopup(auth,githubProvider)
}

    const authInfo={user,setUser,createUser,loader,setLoader,signIn,googleSignIn,logOut,verifyEmail,githubSignIn,UserProfile}
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default UserContext;