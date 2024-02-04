"use client";

import { createContext, useState, Dispatch, SetStateAction } from "react";
import { auth, provider } from "../firebase/config";
import {
  signInWithPopup,
  GoogleAuthProvider,
  OAuthCredential,
  signInWithRedirect,
  getRedirectResult,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { setCookie } from "cookies-next";
import toast from "react-hot-toast";

type Props = {
  children: React.ReactNode;
};

const Welcome = (username: string | null, message?: string) =>
  toast(
    message
      ? message
      : `花を咲かせてありがとう${username ? username : "お花人"}さん`,
    {
      icon: "🌸",
    }
  );

export type AuthContextType = {
  authContext: User | undefined;
  setAuthContext: Dispatch<SetStateAction<User | undefined>>;
  SignInWithGooglePopup?: () => void;
  SignInwithGoogleRedirect?: () => void;
  SignOut?: () => void;
  SignUpWithEmailAndPassword?: (formData: FormData) => void;
  SignInWithEmailAndPassword?: (formData: FormData) => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthContextProvider({ children }: Props) {
  const [authContext, setAuthContext] = useState<User>();

  const SetAuthContextAndCookie = (user: User) => {
    setCookie("email", user.email);
    setCookie("username", user.username);
    setCookie("profileImage", user.profileImage);
    setAuthContext(user);
  };

  const SignInWithGooglePopup = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(
          result
        ) as OAuthCredential;
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        const UserInfo: User = {
          email: user.email as string,
          username: user.displayName,
          profileImage: user.photoURL,
        };
        SetAuthContextAndCookie(UserInfo);
        Welcome(user.displayName);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const SignInwithGoogleRedirect = () => {
    signInWithRedirect(auth, provider);
    getRedirectResult(auth)
      .then((result) => {
        if (result) {
          // This gives you a Google Access Token. You can use it to access Google APIs.
          const credential = GoogleAuthProvider.credentialFromResult(
            result
          ) as OAuthCredential;
          const token = credential.accessToken;

          // The signed-in user info.
          const user = result.user;
          // IdP data available using getAdditionalUserInfo(result)
          // ...
          const UserInfo: User = {
            email: user.email as string,
            username: user.displayName,
            profileImage: user.photoURL,
          };
          SetAuthContextAndCookie(UserInfo);
          Welcome(user.displayName);
        }
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const SignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const SignUpWithEmailAndPassword = (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
        const UserInfo: User = {
          email: user.email as string,
          username: user.displayName,
          profileImage: user.photoURL,
        };
        SetAuthContextAndCookie(UserInfo);
        Welcome(user.displayName, "はじめまして、お花人さん");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const SignInWithEmailAndPassword = (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        const UserInfo: User = {
          email: user.email as string,
          username: user.displayName,
          profileImage: user.photoURL,
        };
        SetAuthContextAndCookie(UserInfo);
        Welcome(user.displayName);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <AuthContext.Provider
      value={{
        authContext,
        setAuthContext,
        SignInWithGooglePopup,
        SignInwithGoogleRedirect,
        SignOut,
        SignUpWithEmailAndPassword,
        SignInWithEmailAndPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
