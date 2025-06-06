"use client";
import { motion } from "framer-motion";
import { FaFacebookF } from "react-icons/fa";
import Img from "../../_global/Img";
import { ReactNode } from "react";

interface SocialButtonProps {
  provider: "google" | "facebook";
  onClick: () => void;
  isLoading?: boolean;
  local: "en" | "ar";
}

type LineLabel = {
  en: string;
  ar: string;
};

type LineItem = {
  bg: string;
  label: LineLabel;
  imgsrc?: string;
  icon?: ReactNode;
};

type lineType = {
  [key: string]: LineItem;
};

const SocialButton: React.FC<SocialButtonProps> = ({
  provider,
  onClick,
  isLoading,
  local,
}) => {
  const styles: lineType = {
    google: {
      bg: "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100",
      imgsrc: "/google.png",
      label: {
        en: "Continue with Google",
        ar: "تابع باستخدام جوجل",
      },
    },
    facebook: {
      bg: "bg-[#1877F2] text-white hover:bg-[#145dc2]",
      icon: <FaFacebookF className="text-white" />,
      label: {
        en: "Continue with Facebook",
        ar: "تابع باستخدام فيسبوك",
      },
    },
  };

  const current = styles[provider];

  return (
    <motion.button
      whileHover={{ scale: isLoading ? 1 : 1.02 }}
      whileTap={{ scale: isLoading ? 1 : 0.98 }}
      onClick={onClick}
      disabled={isLoading}
      className={`w-full flex items-center justify-center space-x-3 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
        current.bg
      } ${isLoading ? "cursor-not-allowed opacity-60" : "shadow"}`}
    >
      {isLoading ? (
        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
      ) : (
        <>
          {current.icon ? (
            current.icon
          ) : (
            <Img src={current.imgsrc ?? "/google.png"} className="w-5 h-5" />
          )}
          <span className="min-w-[150px] whitespace-nowrap">
            {current.label[local]}
          </span>
        </>
      )}
    </motion.button>
  );
};

export default SocialButton;
