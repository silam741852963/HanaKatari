"use client";

import useAuth from "@/lib/hook/useAuth";
import { AuthContextType } from "@/lib/context/AuthContext";
import Link from "next/link";
import { Toaster } from "react-hot-toast";

export default function AuthMain() {
  const {
    authContext,
    setAuthContext,
    SignInWithGooglePopup,
    SignInwithGoogleRedirect,
    SignInWithEmailAndPassword,
  } = useAuth() as AuthContextType;

  return (
    <main>
      <form action={SignInWithEmailAndPassword}>
        <input type="text" placeholder="yourmail@gmail.com" name="email" />
        <input type="password" name="password" className="text-black" />
        <button>Sign In</button>
      </form>
      <form action={SignInWithGooglePopup}>
        <button>Google</button>
      </form>
      <form action={SignInwithGoogleRedirect}>
        <button>Google</button>
      </form>
      <Link href="/auth/signUp">Need a new account?</Link>{" "}
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 9000,
          style: {
            background: "#fcd1d7",
            color: "#fff",
          },
        }}
      />
    </main>
  );
}
