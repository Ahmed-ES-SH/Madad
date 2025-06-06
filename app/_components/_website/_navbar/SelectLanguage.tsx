"use client";
import { useVariables } from "@/app/context/VariablesContext";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function SelectLanguage() {
  const { showLangDrop, setShowLangDrop, local } = useVariables();

  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const toggleDropdown = () => {
    setShowLangDrop((prev) => !prev);
  };

  const handleChangeLanguage = (local: string) => {
    const currentPath =
      typeof window !== "undefined" &&
      window.location.pathname.split("/").slice(2).join("/");

    router.push(`/${local}/${currentPath || ""}`);

    setShowLangDrop(false);
  };

  useEffect(() => {
    if (local == "en") {
      setSelectedLanguage("English");
    } else {
      setSelectedLanguage("العربية");
    }
  }, [local]);

  return (
    <>
      <div className="relative max-md:w-full">
        <button
          onClick={toggleDropdown}
          className="flex items-center justify-between gap-2 px-4 py-2 text-white bg-sky-600 rounded-full shadow-lg max-lg:w-full"
        >
          <span className="w-[45px]">{selectedLanguage}</span>
          <IoIosArrowDown />
        </button>
        {showLangDrop && (
          <div className="absolute right-0 mt-2 w-40 bg-sky-500 rounded-md shadow-lg z-10">
            <button
              className="w-full text-left px-4 py-2 text-white duration-300 hover:text-black hover:bg-gray-100"
              onClick={() => handleChangeLanguage("ar")}
            >
              العربية
            </button>
            <button
              className="w-full text-left px-4 py-2 text-white duration-300 hover:text-black hover:bg-gray-100"
              onClick={() => handleChangeLanguage("en")}
            >
              English
            </button>
          </div>
        )}
      </div>
    </>
  );
}
