import AboutPage from "@/app/_components/_website/_about/AboutPage";
import CompanyStats from "@/app/_components/_website/_about/CompanyStats";
import Contact from "@/app/_components/_website/_about/Contact";
import TestimonialsSection from "@/app/_components/_website/_about/TestimonialsSection";
import React from "react";

export default function About() {
  return (
    <>
      <AboutPage />
      <CompanyStats />
      <TestimonialsSection />
      <Contact />
    </>
  );
}
