import React, {useContext, useState,useEffect} from 'react'
import {auth} from '../Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const AuthContext =React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}
export function AuthProvider({children}) {
    const [currentUser, setCurrentuser]=useState()

    function signup(email, password){
        return createUserWithEmailAndPassword(email,password)
    }
    useEffect(()=>{
    const unsubscribe =auth.onAuthStateChanged(user=>{
        setCurrentuser(user)
    })
    return unsubscribe
    },[])

    const value={
        currentUser,
        signup
    }
  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}
