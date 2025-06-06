/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SubmitButton from "./SubmitButton";
import SocialButton from "./SocialButtonProps ";
import { useSignIn, useSignUp, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { OAuthStrategy } from "@clerk/types";
import VerifyCode from "./VerifyCode";
import SignupFields from "./SignupFields";
import { useVariables } from "@/app/context/VariablesContext";
import { getTranslations } from "@/app/helpers/helpers";
import { directionMap } from "@/app/constants/constants";
import FormHeader from "./FormHeader";
import LocalLink from "../../_global/LocalLink";

interface FormErrors {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

function SignupForm() {
  const { local } = useVariables();
  const { signUpPage, formValidation } = getTranslations(local);

  const { user } = useUser();
  const router = useRouter();
  const { isLoaded, signUp } = useSignUp();
  const { signIn } = useSignIn();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [pendingVerification, setPendingVerification] = useState(false);

  useEffect(() => {
    if (user) {
      router.push(`/`);
    }
  }, [user, router]);

  function validateForm() {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = formValidation.fullNameRequired;
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = formValidation.fullNameTooShort;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = formValidation.emailRequired;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = formValidation.emailInvalid;
    }

    if (!formData.password) {
      newErrors.password = formValidation.passwordRequired;
    } else if (formData.password.length < 8) {
      newErrors.password = formValidation.passwordTooShort;
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = formValidation.passwordWeak;
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = formValidation.confirmPasswordRequired;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = formValidation.passwordsNotMatch;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev: any) => ({ ...prev, [name]: undefined }));
    }
  }

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }

    const isValid = validateForm();

    if (!isValid) return;

    try {
      setIsLoading(true);
      await signUp.create({
        emailAddress: formData.email,
        password: formData.password,
      });
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      toast.success(
        "The account has been created successfully. Please check your email to activate the account and log in at any time."
      );
      setPendingVerification(true);
      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error: any) {
      const errorMessage = error.errors?.[0]?.message;
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  if (!signIn) return;

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

  const isFormValid =
    Object.keys(errors).length === 0 &&
    Object.values(formData).every((value) => value.trim() !== "");

  return (
    <>
      {!pendingVerification && (
        <motion.div
          dir={directionMap[local]}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full space-y-4"
        >
          <FormHeader title={signUpPage.title} subtitle={signUpPage.subtitle} />

          <form onSubmit={handleSubmit} className="w-full">
            <div className="hidden" id="clerk-captcha" />

            <SignupFields
              locale={local}
              formData={formData}
              errors={errors}
              handleInputChange={handleInputChange}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              showConfirmPassword={showConfirmPassword}
              setShowConfirmPassword={setShowConfirmPassword}
            />
            <SubmitButton
              isLoading={isLoading}
              disabled={!isFormValid || isLoading}
            >
              {signUpPage.createAccount}
            </SubmitButton>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <p className="text-sm text-gray-600">
              {signUpPage.alreadyHave}{" "}
              <LocalLink
                href="/signin"
                className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
              >
                {signUpPage.SignIn}
              </LocalLink>
            </p>
          </motion.div>

          <div className="w-full flex items-center gap-2">
            <div className="h-[2px] bg-gray-200 rounded-xl flex-1"></div>
            <p>{signUpPage.or}</p>
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
      )}

      {pendingVerification && (
        <VerifyCode onClose={() => setPendingVerification(false)} />
      )}
    </>
  );
}

export default SignupForm;
