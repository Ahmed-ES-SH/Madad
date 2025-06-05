import React from "react";
import Img from "./Img";
import SelectLanguage from "../_website/_navbar/SelectLanguage";
import MobailSidebar from "../_website/_navbar/MobailSidebar";
import NavLinks from "../_website/_navbar/NavLinks";
import ClientDiv from "./ClientDiv";
import Joinbtn from "../_website/_navbar/Joinbtn";
import LocalLink from "./LocalLink";

export default function Navbar() {
  return (
    <ClientDiv>
      <div className="w-full z-[999] min-h-[70px] shadow-md px-2 py-2 fixed bg-primary-blue">
        <div className="c-container flex items-center justify-between">
          <div className="logo relative">
            <LocalLink href={"/"}>
              <Img src="/logo.png" className="w-[90px] object-contain" />
            </LocalLink>
          </div>
          {/* Links */}
          <NavLinks />
          {/* ////////////////////////////////// */}
          <div className="flex items-center gap-2 ">
            <Joinbtn />
            {/* SelectLanguage */}
            <SelectLanguage />
            {/* ///////////////// */}
            <MobailSidebar />
          </div>
        </div>
      </div>
    </ClientDiv>
  );
}
