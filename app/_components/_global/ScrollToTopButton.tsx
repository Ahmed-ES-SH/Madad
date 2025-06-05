"use client";
import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // لتأثير التمرير السلس
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 flex items-center justify-center w-12 h-12 hover:bg-primary-blue  hover:scale-110  bg-blue-500 text-white  rounded-full shadow-lg duration-300 ${
        isVisible
          ? "opacity-100 flex"
          : "opacity-0 pointer-events-none invisible"
      }`}
    >
      <FaChevronUp className="size-7 font-thin" />
    </button>
  );
}
