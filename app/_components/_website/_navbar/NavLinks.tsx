"use client";
import { navLinks } from "@/app/constants/constants";
import { useVariables } from "@/app/context/VariablesContext";
import React from "react";
import LocalLink from "../../_global/LocalLink";

export default function NavLinks() {
  const Variables = useVariables();
  const local = Variables.local || "en";
  return (
    <>
      <div className="links max-lg:hidden text-white">
        <ul className="flex items-center gap-6">
          {navLinks.map((link, index) => (
            <LocalLink
              href={link.link ? link.link : "/#contactus"}
              key={index}
              className="group main_link xl:text-[18px] text-[15px] relative hover:text-sky-200 duration-150 cursor-pointer"
            >
              <div className="flex items-center gap-1">
                <link.icon className="size-4" />
                <p>{link.text[local]}</p>
              </div>
              <div className="line group-hover:w-full duration-300 w-0 bg-sky-400 h-[2px] absolute"></div>
              <div className="circle group-hover:visible duration-300 w-[3px] invisible left-2 h-[3px] rounded-full bg-white z-[999] absolute"></div>
            </LocalLink>
          ))}
        </ul>
      </div>
    </>
  );
}
