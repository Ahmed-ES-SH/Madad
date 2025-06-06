/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useVariables } from "@/app/context/VariablesContext";
import { getTranslations } from "@/app/helpers/helpers";
import { useSignIn, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { OAuthStrategy } from "@clerk/types";
import SocialButton from "./SocialButtonProps ";
import SubmitButton from "./SubmitButton";
import FormHeader from "./FormHeader";
import { directionMap } from "@/app/constants/constants";
import SignInFields from "./SignInFields";
import LocalLink from "../../_global/LocalLink";

interface FormErrors {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export default function SignInForm() {
  const { signIn, setActive } = useSignIn();
  const { user } = useUser();
  const { local } = useVariables();
  const { formValidation, signInPage } = getTranslations(local);

  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push(`/`);
    }
  }, [user, router]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function validateForm() {
    const newErrors: FormErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = formValidation.emailRequired;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = formValidation.emailInvalid;
    }

    if (!formData.password) {
      newErrors.password = formValidation.passwordRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const isFormValid = true;

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev: any) => ({ ...prev, [name]: undefined }));
    }
  }

  if (!signIn) return;

  const handleSignIn = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = validateForm();
    if (!isValid) return;

    try {
      setIsLoading(true);
      const result = await signIn.create({
        identifier: formData.email,
        password: formData.password,
      });

      await setActive({ session: result.createdSessionId });
      router.push(`/`);
    } catch (err: any) {
      const errorMessage = err.errors?.[0]?.message || "Something went wrong";
      // ✅ Show error toast
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const signInWith = (strategy: OAuthStrategy) => {
    return signIn
      .authenticateWithRedirect({
        strategy,
        redirectUrl: `/`,
        redirectUrlComplete: "/",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err.errors);
        console.error(err, null, 2);
      });
  };

  if (user) return null;

  return (
    <>
      <motion.div
        dir={directionMap[local]}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full space-y-4"
      >
        <FormHeader title={signInPage.title} subtitle={signInPage.subtitle} />

        <form onSubmit={handleSignIn} className="w-full">
          <div className="hidden" id="clerk-captcha" />

          <SignInFields
            locale={local}
            formData={formData}
            errors={errors}
            handleInputChange={handleInputChange}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
          <SubmitButton
            isLoading={isLoading}
            disabled={!isFormValid || isLoading}
          >
            {signInPage.signIn}
          </SubmitButton>
        </form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <p className="text-sm text-gray-600">
            {signInPage.noAccount}{" "}
            <LocalLink
              href="/signup"
              className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
            >
              {signInPage.createAccount}
            </LocalLink>
          </p>
        </motion.div>

        <div className="w-full flex items-center gap-2">
          <div className="h-[2px] bg-gray-200 rounded-xl flex-1"></div>
          <p>{signInPage.or}</p>
          <div className="h-[2px] bg-gray-200 rounded-xl flex-1"></div>
        </div>
        <SocialButton
          local={local}
          provider="google"
          onClick={() => signInWith("oauth_google")}
        />
        <SocialButton
          local={local}
          provider="facebook"
          onClick={() => signInWith("oauth_facebook")}
        />
      </motion.div>
    </>
  );
}
