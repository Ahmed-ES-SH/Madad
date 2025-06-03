"use client";
import { useVariables } from "@/app/context/VariablesContext";
import { getTranslations } from "@/app/helpers/helpers";
import Link from "next/link";
import React from "react";

export default function Joinbtn() {
  const { local } = useVariables();
  const { hero } = getTranslations(local);
  return (
    <>
      <div className="max-md:hidden">
        <Link
          href={"/signup"}
          className="px-4 block shadow-md group overflow-hidden h-full relative py-2 rounded-full bg-primary-blue"
        >
          <p className="z-[999] whitespace-nowrap relative group-hover:text-black text-white duration-300">
            {hero.join}
          </p>
          <div className="group-hover:w-full left absolute right-0 top-0 bg-white w-0 duration-700 h-[500px]"></div>
          <div className="group-hover:w-full right absolute left-0 top-0 bg-white w-0 duration-700 h-[500px]"></div>
        </Link>
      </div>
    </>
  );
}
