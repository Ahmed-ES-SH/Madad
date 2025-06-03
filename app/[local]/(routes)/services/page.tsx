import PricingPlans from "@/app/_components/_global/PricingPlans";
import HowWeWork from "@/app/_components/_website/_services/HowWeWork";
import ServicesComponent from "@/app/_components/_website/_services/ServicesComponent";
import React from "react";

export default function page() {
  return (
    <>
      <ServicesComponent />
      <HowWeWork />
      <PricingPlans />
    </>
  );
}
