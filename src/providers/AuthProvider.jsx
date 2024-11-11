import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user,setUser]=useState(null)
    const name = 'arha';
    // create user
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user
    const loginUser = (email, password) => {
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
          
//     })


    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
               
         })
        return () => {
            subscribe()
            }
    },[])

    const signOutUser = () => {
        return signOut(auth)
    }

    const authInfo = {
        user,
        createUser,
        loginUser,
        signOutUser
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