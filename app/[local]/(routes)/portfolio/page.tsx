/* eslint-disable @typescript-eslint/no-explicit-any */
import ProjectsPortfolio from "@/app/_components/_website/_portfolio/ProjectsPortfolio";
import { getSharedMetadata } from "@/app/helpers/getSharedMetadata";
import { getTranslations } from "@/app/helpers/helpers";
import React from "react";

export async function generateMetadata({ params }: any) {
  const local = (await params.local) || "en";
  const translations = getTranslations(local);

  const sharedMetadata = getSharedMetadata(local, translations);

  return {
    title: translations.portfolioMeta.title,
    description: translations.portfolioMeta.description,
    ...sharedMetadata,
  };
}

export default function Portfolio() {
  return (
    <>
      <ProjectsPortfolio />
    </>
  );
}
