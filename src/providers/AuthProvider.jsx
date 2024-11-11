import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)
   
    // loading animation 
    // if (loading) {
        
    //     return <span className="loading loading-infinity loading-xs"></span>
    // }
    // create user
    const createUser = (email,password) => {
        setLoading(false)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user
    const loginUser = (email, password) => {
        setLoading(false)
        return signInWithEmailAndPassword(auth,email, password)
    }

    //

    // const authChange = onAuthStateChanged(auth, (currentUser) => {
    //     if (currentUser) {
    //         setUser(currentUser)
    //         console.log(currentUser)
    //     } else {
    //         console.log('No User Logged In')
    //     }
    // })



//    onAuthStateChanged(auth, (currentUser) => {
//             setUser(currentUser)
//           console.log(currentUser);
//     })


    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false)
            setUser(currentUser)
               
         })
        return () => {
            subscribe()
            }
    },[])

    const signOutUser = () => {
        return signOut(auth)
    }

    // login with google
    const googleUser =()=>{
        return signInWithPopup(auth, googleProvider)
    }
    const authInfo = {
        user,
        createUser,
        loginUser,
        signOutUser,
        googleUser,
        loading
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;