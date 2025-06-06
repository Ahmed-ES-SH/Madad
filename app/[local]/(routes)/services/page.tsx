/* eslint-disable @typescript-eslint/no-explicit-any */
import PricingPlans from "@/app/_components/_global/PricingPlans";
import HowWeWork from "@/app/_components/_website/_services/HowWeWork";
import ServicesComponent from "@/app/_components/_website/_services/ServicesComponent";
import { getSharedMetadata } from "@/app/helpers/getSharedMetadata";
import { getTranslations } from "@/app/helpers/helpers";
import React from "react";

export async function generateMetadata({ params }: any) {
  const local = (await params.local) || "en";
  const translations = getTranslations(local);

  const sharedMetadata = getSharedMetadata(local, translations);

  return {
    title: translations.servicesMeta.title,
    description: translations.servicesMeta.description,
    ...sharedMetadata,
  };
}

export default function page() {
  return (
    <>
      <ServicesComponent />
      <HowWeWork />
      <PricingPlans />
    </>
  );
}
