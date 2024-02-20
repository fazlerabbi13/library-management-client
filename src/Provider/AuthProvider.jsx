import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";




export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
         setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
          setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signinWithGoogle = () => {
           setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
           setLoading(false);
            console.log('obserbing', currentUser)
        });
        return () => {
            unsubscribe();
        }
    }, [])
    const authInfo = { user, signinWithGoogle, logOut, loading, createUser, signInUser }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;