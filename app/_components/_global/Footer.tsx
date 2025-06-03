"use client";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";
import Img from "./Img";
import { useVariables } from "@/app/context/VariablesContext";
import { getTranslations } from "@/app/helpers/helpers";
import { directionMap } from "@/app/constants/constants";

const footerSections = [
  {
    title: { en: "Services", ar: "الخدمات" },
    links: [
      { en: "1on1 Coaching", ar: "تدريب فردي" },
      { en: "Company Review", ar: "مراجعة الشركة" },
      { en: "HR Consulting", ar: "استشارات الموارد البشرية" },
    ],
  },
  {
    title: { en: "Company", ar: "الشركة" },
    links: [
      { en: "About", ar: "من نحن" },
      { en: "Meet the Team", ar: "تعرف على الفريق" },
      { en: "Careers", ar: "الوظائف" },
    ],
  },
  {
    title: { en: "Helpful Links", ar: "روابط مفيدة" },
    links: [
      { en: "Contact", ar: "اتصل بنا" },
      { en: "FAQs", ar: "الأسئلة الشائعة" },
      { en: "Live Chat", ar: "الدردشة المباشرة" },
    ],
  },
  {
    title: { en: "Legal", ar: "القانونية" },
    links: [
      { en: "Accessibility", ar: "سهولة الوصول" },
      { en: "Refund Policy", ar: "سياسة الاسترجاع" },
      { en: "Terms of Service", ar: "شروط الخدمة" },
    ],
  },
  {
    title: { en: "Downloads", ar: "التحميلات" },
    links: [
      { en: "Marketing Calendar", ar: "تقويم التسويق" },
      { en: "SEO Infographics", ar: "مخططات تحسين محركات البحث" },
      { en: "Brochure", ar: "كتيب تعريفي" },
    ],
  },
];

const socialLinks = [
  { icon: <FaFacebookF className="size-5" />, label: "Facebook", href: "#" },
  { icon: <FaInstagram className="size-5" />, label: "Instagram", href: "#" },
  { icon: <FaTwitter className="size-5" />, label: "Twitter", href: "#" },
  { icon: <FaLinkedinIn className="size-5" />, label: "LinkedIn", href: "#" },
];

export default function Footer() {
  const { local } = useVariables();
  const { footerLines } = getTranslations(local);
  return (
    <footer dir={directionMap[local]} className="bg-gray-800 w-full">
      <div className="c-container py-4">
        <div className="flex flex-col gap-3 w-full">
          <div className="text-teal-600">
            <Img src="/logo.png" className="w-[120px] object-contain" />
          </div>

          <div className="max-lg:flex-col max-lg:items-start max-lg:gap-5 flex items-center justify-between  xl:w-[90%] xl:mx-auto">
            <div className="">
              <h2 className="text-2xl font-bold text-gray-200">
                {footerLines.heading}
              </h2>
              <p className="mt-4 text-gray-400 w-[430px] max-md:w-fit">
                {footerLines.description}
              </p>
            </div>

            <div className="p-2 flex items-center max-lg:flex-col max-lg:gap-3 max-lg:items-start max-lg:w-full">
              <input
                type="email"
                id="UserEmail"
                placeholder="john@rhcp.com"
                name="email"
                className={`w-[300px] text-black placeholder:text-black/60 max-lg:w-full h-[48px] px-3 outline-none max-lg:rounded-md ${
                  local == "en" ? "lg:rounded-l-md" : "lg:rounded-r-md"
                } bg-gray-200 border border-gray-200`}
              />
              <button
                className={`h-[48px] w-full bg-teal-500 px-6 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0 max-lg:rounded-md ${
                  local == "en" ? "lg:rounded-r-md" : "lg:rounded-l-md"
                }`}
              >
                {footerLines.subscribeButton}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-x-4 gap-y-12 justify-items-center xl:w-3/4 xl:mx-auto w-full mt-12">
            {footerSections.map((section, index) => (
              <div key={index} className="w-full">
                <p className="font-medium text-gray-200">
                  {section.title[local]}
                </p>
                <ul className="mt-6 space-y-4 text-sm">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        href="#"
                        className={`text-gray-300 hover:text-gray-500 duration-300 ${
                          local == "en" ? "hover:ml-2" : "hover:mr-2"
                        }`}
                      >
                        {link[local]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <ul className="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end mt-4">
            {socialLinks.map(({ icon, label, href }, idx) => (
              <li key={idx}>
                <Link
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-gray-200 hover:text-gray-400 hover:-translate-y-2 duration-300"
                >
                  <span className="sr-only">{label}</span>
                  {icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
