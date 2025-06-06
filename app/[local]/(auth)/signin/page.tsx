/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import AuthLayout from "@/app/_components/_website/_auth/AuthLayout";
import SignInForm from "@/app/_components/_website/_auth/SignInForm";
import { getTranslations } from "@/app/helpers/helpers";
import { getSharedMetadata } from "@/app/helpers/getSharedMetadata";

export async function generateMetadata({ params }: any) {
  const local = (await params.local) || "en";
  const translations = getTranslations(local);

  const sharedMetadata = getSharedMetadata(local, translations);

  return {
    title: translations.signInMeta.title,
    description: translations.signInMeta.description,
    ...sharedMetadata,
  };
}

export default function SignupPage() {
  return (
    <AuthLayout>
      <SignInForm />
    </AuthLayout>
  );
}
