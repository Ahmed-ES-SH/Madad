"use client";
import { useSignUp } from "@clerk/nextjs";
import React from "react";

export default function SignupPage() {
  const { signUp, isLoaded } = useSignUp();
  return (
    <>
      <div className="w-full"></div>
    </>
  );
}
