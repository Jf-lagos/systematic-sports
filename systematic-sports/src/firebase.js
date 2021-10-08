import { getAuth, onAuthStateChanged } from '@firebase/auth'
import { initializeApp } from 'firebase/app'
import { useState, useEffect, useContext, createContext } from 'react'
 
export const firebaseApp = initializeApp ({
   apiKey: "AIzaSyA30MqO1R6JR18enIvwfMl8HuVjAF_mEMc",
   authDomain: "systemic-sports.firebaseapp.com",
   projectId: "systemic-sports",
   storageBucket: "systemic-sports.appspot.com",
   messagingSenderId: "214474989655",
   appId: "1:214474989655:web:c9269c2fc5f01e150d0312",
   measurementId: "G-Q9SYKDGLMQ"
 });

export const AuthContext = createContext()

export const AuthContextProvider = props => {
  const [user, setUser] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError)
    return() => unsubscribe()
  }, [])
  return <AuthContext.Provider value={{ user, error }} {...props} />
}

export const useAuthState = () => {
  const auth = useContext(AuthContext)
  return { ...auth, isAuthenticated: auth.user != null }
}