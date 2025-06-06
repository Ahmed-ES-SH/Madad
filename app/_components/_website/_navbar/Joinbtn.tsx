"use client";
import { useVariables } from "@/app/context/VariablesContext";
import { getTranslations } from "@/app/helpers/helpers";
import React from "react";
import LocalLink from "../../_global/LocalLink";
import { UserButton, useUser } from "@clerk/nextjs";

export default function Joinbtn() {
  const { user } = useUser();
  const { local } = useVariables();
  const { hero } = getTranslations(local);
  return (
    <>
      {!user && (
        <div className="max-md:hidden">
          <LocalLink
            href={"/signup"}
            className="px-4 block shadow-md group overflow-hidden h-full relative py-2 rounded-full bg-sky-600"
          >
            <p className="z-[999] whitespace-nowrap relative group-hover:text-black text-white duration-300">
              {hero.join}
            </p>
            <div className="group-hover:w-full left absolute right-0 top-0 bg-white w-0 duration-700 h-[500px]"></div>
            <div className="group-hover:w-full right absolute left-0 top-0 bg-white w-0 duration-700 h-[500px]"></div>
          </LocalLink>
        </div>
      )}

      {user && (
        <UserButton
          appearance={{
            elements: {
              userButtonAvatarBox: {
                width: "32px",
                height: "32px",
              },
              userButtonPopoverCard: {
                zIndex: "999999",
                marginTop: "15px",
                marginLeft: "auto",
              },
            },
          }}
          afterSignOutUrl={`/${local}`}
        />
      )}
    </>
  );
}
