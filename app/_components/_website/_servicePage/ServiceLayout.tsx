"use client";
import React from "react";
import ServiceHeader from "./ServiceHeader";
import ServiceDescription from "./ServiceDescription";
import BenefitsList from "./BenefitsList";
import FeaturesList from "./FeaturesList";
import TargetAudience from "./TargetAudience";
import OtherServicesSidebar from "./OtherServicesSidebar";
import { servicesData } from "@/app/constants/servicesData";
import { notFound, useSearchParams } from "next/navigation";
import ProjectsOfSlider from "../_projectPage/SliderOfProjects";
import { projectsData } from "@/app/constants/projects";
import { useVariables } from "@/app/context/VariablesContext";
import { getTranslations } from "@/app/helpers/helpers";
import { directionMap } from "@/app/constants/constants";
import ActionButtons from "./ActionButtons";

export default function ServiceLayout() {
  const { local } = useVariables();
  const { ProjectPage } = getTranslations(local);

  const isArabic = local == "ar";
  const searchParams = useSearchParams();

  const serviceId = searchParams.get("serviceId");
  const service =
    servicesData.find((service) => service.id == Number(serviceId)) ||
    servicesData[0];

  const otherServices = servicesData;

  if (!service) {
    return notFound();
  }

  return (
    <div dir={directionMap[local]} className="min-h-screen pt-20 bg-gray-50">
      <div className="c-container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <ServiceHeader
              local={local}
              title={service.title}
              image={service.fullImage}
            />

            <div className="space-y-8 mt-8">
              <ServiceDescription
                local={local}
                smallDesc={service.smallDesc}
                description={service.description}
              />

              <div className="grid md:grid-cols-2 gap-6">
                <BenefitsList local={local} benefits={service.benefits} />
                <FeaturesList local={local} features={service.features} />
              </div>

              <TargetAudience local={local} audience={service.targetAudience} />

              <ActionButtons local={local} />
            </div>
          </div>

          <div className="lg:w-1/3">
            <OtherServicesSidebar
              services={otherServices}
              currentServiceSlug={service.slug}
            />
          </div>
        </div>
        <div className="my-4 pt-4 border-t border-gray-300">
          <div
            className={`text-center mb-8 ${
              isArabic ? "text-right" : "text-left"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {ProjectPage.allProjects}
            </h2>
            <p className="text-lg text-gray-600">
              {ProjectPage.exploreProjects}
            </p>
          </div>

          <ProjectsOfSlider
            projects={projectsData}
            language={local}
            isArabic={isArabic}
          />
        </div>
      </div>
    </div>
  );
}
