"use client";
import Link from "next/link";
import React from "react";
import Img from "../../_global/Img";
import { useVariables } from "@/app/context/VariablesContext";
import { getTranslations } from "@/app/helpers/helpers";
import { directionMap } from "@/app/constants/constants";

export default function ValueSection() {
  const { local } = useVariables();
  const { companyValuesSection } = getTranslations(local);
  return (
    <section dir={directionMap[local]}>
      <div className="c-container py-6">
        <div className="lg:h-[80vh] max-lg:flex-col-reverse w-full h-fit flex items-center justify-between">
          <div className="relative flex items-center w-full max-lg:self-start lg:flex-1">
            <div className="p-2">
              <h2 className="text-2xl text-primary-red font-bold sm:text-3xl underline dark:text-second-text">
                {companyValuesSection.title}
              </h2>

              <p className="mt-4 md:w-[90%] lg:w-3/4 max-md:w-full text-second-text">
                {companyValuesSection.description}
              </p>

              <Link href="/about" className="primary-btn group">
                Know More
              </Link>
            </div>
          </div>

          <div className="relative z-10 lg:py-16 flex-1">
            <Img
              src="/madad-hero-3.png"
              className="lg:w-[750px] w-[550px]  object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
