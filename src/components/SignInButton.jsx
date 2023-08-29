"use client";

import { signIn } from "next-auth/react";

export default function SignInButton() {
  return (
    <button
      className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500"
      onClick={() => signIn("google", { callbackUrl: "/" })}
    >
      Sign in with Google
    </button>
  );
}
