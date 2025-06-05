"use client";
import React from "react";
import Link from "next/link";
import { useVariables } from "@/app/context/VariablesContext";
import { formatTitle, getTranslations } from "@/app/helpers/helpers";
import { ServiceData } from "@/app/constants/servicesData";
import Img from "../../_global/Img";

interface props {
  services: ServiceData[];
  currentServiceSlug: string;
}

export default function OtherServicesSidebar({
  services,
  currentServiceSlug,
}: props) {
  const { local } = useVariables();
  const { servicePage } = getTranslations(local);
  return (
    <div className="sticky h-[50vh] xl:h-[80vh] custom-scrollbar overflow-y-auto top-8">
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold text-primary-text mb-4">
          {servicePage.otherServices}
        </h3>
        <div className="space-y-4">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/${local}/services/${formatTitle(
                service.title[local]
              )}?serviceId=${service.id}`}
              className={`block p-3 rounded-lg transition-all hover:bg-gray-50 ${
                service.slug === currentServiceSlug
                  ? `bg-blue-50 ${
                      local == "ar" ? "border-r-4" : "border-l-4"
                    } border-blue-500`
                  : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="relative h-8 w-8 flex-shrink-0 mr-3">
                  <Img
                    src={service.imgsrc}
                    alt={service.title[local]}
                    className="object-contain"
                  />
                </div>
                <span className="text-primary-text font-medium">
                  {service.title[local]}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
