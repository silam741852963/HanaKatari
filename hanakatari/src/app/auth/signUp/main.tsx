"use client";

import useAuth from "@/lib/hook/useAuth";
import { AuthContextType } from "@/lib/context/AuthContext";
import Link from "next/link";
import { Toaster } from "react-hot-toast";

export default function SignUpMain() {
  const { authContext, setAuthContext, SignUpWithEmailAndPassword } =
    useAuth() as AuthContextType;
  return (
    <main>
      <form action={SignUpWithEmailAndPassword}>
        <input type="text" placeholder="yourmail@gmail.com" name="email" />
        <input type="password" name="password" className="text-black" />
        <button>Sign Up</button>
      </form>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "#fcd1d7",
            color: "#ffe7de",
          },
        }}
      />
    </main>
  );
}
