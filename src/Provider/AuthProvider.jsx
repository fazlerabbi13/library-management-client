import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import axios from "axios";




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
          const userEmail = currentUser?.email || user?.email;
          const loggedUser = { email: userEmail };
          if (currentUser) {
            axios
              .post("http://localhost:5000/jwt", loggedUser, {
                withCredentials: true,
              })
              .then((res) => {
                if (res.data) {
                  setLoading(false);
                }
    
                console.log("token response", res.data);
              });
          } else {
            axios
              .post("http://localhost:5000/logout", loggedUser, {
                withCredentials: true,
              })
              .then((res) => {
                if (res.data) {
                  setLoading(false);
                }
                console.log(res.data);
              });
          }
        });
        return () => {
          return unsubscribe();
        };
      }, [user?.email]);
    const authInfo = { user, signinWithGoogle, logOut, loading, createUser, signInUser }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;