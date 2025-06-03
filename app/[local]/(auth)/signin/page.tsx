"use client";
import { useSignIn } from "@clerk/nextjs";
import React from "react";

export default function SigninPage() {
  const { setActive, signIn, isLoaded } = useSignIn();
  return (
    <>
      <div className="w-full"></div>
    </>
  );
}
