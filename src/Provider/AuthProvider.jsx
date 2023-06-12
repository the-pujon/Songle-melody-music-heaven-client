import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import axios from "axios";
//const axios = require("axios").default;

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userLoading, setUserLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  //  sign up with email
  const registerWithEmail = (email, password) => {
    setLoading(true);
    setUserLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //  sign in with email
  const loginWithEmail = (email, password) => {
    setLoading(true);
    setUserLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //  sign in with google
  const loginWithGoogle = () => {
    setLoading(true);
    setUserLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //  sign in with github
  const loginWithGitHub = () => {
    setLoading(true);
    setUserLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  };

  //   signOut
  const logOut = () => {
    setLoading(true);
    setUserLoading(true);
    return signOut(auth);
  };

  // auth state change check
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        axios
          .post("http://localhost:3000/jwt", {
            email: currentUser.email,
          })
          .then((data) => {
            // console.log(data.data.token)
            localStorage.setItem("access-token", data.data.token);
            setLoading(false);
            setUserLoading(false);
          });
      } else {
        localStorage.removeItem("access-token");
        setUserLoading(false);
      }
    });

    return () => {
      unSub();
    };
  }, []);

  const userInfo = {
    registerWithEmail,
    loginWithEmail,
    loginWithGitHub,
    loginWithGoogle,
    logOut,
    user,
    loading,
    userLoading,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
