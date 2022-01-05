import React from "react";
import './login.css';
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../api/firebase-config";
import { signInWithPopup } from "firebase/auth";

function LoginPage() {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      localStorage.setItem('isAuth', auth.currentUser.displayName);
      navigate("/all-guests");
    });
  };

  return (
    <div className="loginPage">
      <p>Sign In With Google to Continue</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
}

export default LoginPage;