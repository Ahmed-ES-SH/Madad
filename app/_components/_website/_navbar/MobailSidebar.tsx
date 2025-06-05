"use client";
import { navLinks } from "@/app/constants/constants";
import React, { useEffect, useState } from "react";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { useVariables } from "@/app/context/VariablesContext";
import { IoClose } from "react-icons/io5";
import LocalLink from "../../_global/LocalLink";

export default function MobailSidebar() {
  const { width, local } = useVariables();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (width > 1014) {
      setIsSidebarOpen(false);
    }
  }, [width]);

  return (
    <>
      <div
        className={`text-white cursor-pointer lg:hidden ${
          isSidebarOpen && "opacity-0"
        }`}
        onClick={toggleSidebar}
      >
        <HiOutlineBars3BottomRight size={30} />
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 w-72 h-full bg-white shadow-xl z-[9999] transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col p-5 gap-6 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button onClick={toggleSidebar} aria-label="Close menu">
          <IoClose size={28} className="text-primary-blue w-fit ml-auto" />
        </button>

        <nav className="flex flex-col gap-4 text-primary-dark">
          {navLinks.map((item, index) => (
            <div
              key={index}
              onClick={() => setIsSidebarOpen(false)}
              className="not-last:border-b hover:text-primary-blue border-b-gray-400 pb-2 hover:border-b-primary-blue transition-colors duration-200"
            >
              <LocalLink
                href={item.link || "/#contactus"}
                className="flex items-center gap-3 text-lg   "
              >
                {item.icon && (
                  <span className="text-xl">
                    <item.icon />
                  </span>
                )}
                <span>{item.text[local]}</span>
              </LocalLink>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
