"use client";
import React from "react";
import { directionMap } from "@/app/constants/constants";
import Img from "../../_global/Img";
import { useVariables } from "@/app/context/VariablesContext";
import { formatTitle, getTranslations } from "@/app/helpers/helpers";
import LocalLink from "../../_global/LocalLink";
import { servicesData } from "@/app/constants/servicesData";

export default function ServicesComponent() {
  const { local } = useVariables();
  const { servicesPage } = getTranslations(local);
  return (
    <>
      <section dir={directionMap[local]} className="pt-12 pb-3">
        <div className="c-container py-8 sm:py-12 lg:py-16">
          <div className="lg:w-3/4 w-full mx-auto text-center">
            <h2 className="text-4xl  text-primary-red underline my-4 font-bold sm:text-2xl">
              {servicesPage.title1}
            </h2>
            <h2 className="text-3xl font-bold sm:text-4xl">
              {servicesPage.title2}
            </h2>

            <p className="mt-4 text-black/70 ">{servicesPage.description}</p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service, index) => (
              <LocalLink
                key={index}
                href={`/services/${formatTitle(
                  service.title[local]
                )}?serviceId=${service.id}`}
                className="block group py-12 rounded-xl border border-gray-300  p-8 shadow-xl transition hover:border-primary-yellow hover:shadow-primary-yellow relative overflow-hidden"
              >
                <div className="group-hover:scale-[140%] group-hover:rotate-[360deg] duration-500 w-fit">
                  <Img src={service.imgsrc} className="w-[50px] " />
                </div>

                <h2 className="mt-4 group-hover:text-white duration-300 text-xl font-bold text-primary-blue ">
                  {service.title[local]}
                </h2>

                <p className="mt-1 group-hover:text-white duration-300 text-sm text-black/70 ">
                  {service.smallDesc[local]}
                </p>

                <div className="w-0 h-full absolute top-0 left-0 bg-primary-yellow z-[-1] group-hover:w-full duration-500"></div>
              </LocalLink>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
