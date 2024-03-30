import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.init";
import { useState } from "react";
const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .then((error) => {
        console.log("error", error.message);
      });
  };

  return (
    <div className="flex flex-col gap-4">
      {user ? (
        <button onClick={handleSignOut} className="text-2xl text-center">
          Sign Out
        </button>
      ) : (
        <button onClick={handleGoogleSignIn} className="text-2xl text-center">
          Google login
        </button>
      )}
      {user && (
        <div className=" flex flex-col justify-center gap-5 items-center text-center">
          <h3>user: {user?.displayName}</h3>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
