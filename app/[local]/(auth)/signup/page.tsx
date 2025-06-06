/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import AuthLayout from "@/app/_components/_website/_auth/AuthLayout";
import SignupForm from "@/app/_components/_website/_auth/SignupForm";
import { getTranslations } from "@/app/helpers/helpers";
import { getSharedMetadata } from "@/app/helpers/getSharedMetadata";

export async function generateMetadata({ params }: any) {
  const local = (await params.local) || "en";
  const translations = getTranslations(local);

  const sharedMetadata = getSharedMetadata(local, translations);

  return {
    title: translations.signUpMeta.title,
    description: translations.signUpMeta.description,
    ...sharedMetadata,
  };
}

export default function SignupPage() {
  return (
    <AuthLayout>
      <SignupForm />
    </AuthLayout>
  );
}
