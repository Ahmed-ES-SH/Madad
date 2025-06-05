"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { useVariables } from "@/app/context/VariablesContext";
import { getTranslations } from "@/app/helpers/helpers";
import { directionMap } from "@/app/constants/constants";

interface ContactInfo {
  icon: React.ReactNode;
  title: { en: string; ar: string };
  details: string[];
}

interface infoCardType {
  info: ContactInfo;
  index: number;
}

// Contact Info Data
const contactInfo: ContactInfo[] = [
  {
    icon: <FiPhone className="w-6 h-6" />,
    title: { en: "Phone", ar: "الهاتف" },
    details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
  },
  {
    icon: <FiMail className="w-6 h-6" />,
    title: { en: "Email", ar: "البريد الإلكتروني" },
    details: ["hello@company.com", "support@company.com"],
  },
  {
    icon: <FiMapPin className="w-6 h-6" />,
    title: { en: "Office", ar: "المكتب" },
    details: ["123 Business Street", "Suite 100, City, ST 12345"],
  },
  {
    icon: <FiClock className="w-6 h-6" />,
    title: { en: "Hours", ar: "ساعات العمل" },
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Weekend: By Appointment"],
  },
];

// Contact Info Component
function ContactInfoCard({ info, index }: infoCardType) {
  const { local } = useVariables();
  return (
    <motion.div
      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -2 }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
          {info.icon}
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">
            {info.title[local]}
          </h3>
          <div className="space-y-1">
            {info.details.map((detail, idx) => (
              <p key={idx} className="text-gray-600 text-sm">
                {detail}
              </p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ContactInfo() {
  const { local } = useVariables();
  const { contactPage } = getTranslations(local);
  return (
    <motion.div
      dir={directionMap[local]}
      className="space-y-6"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {contactPage.contactTitle}
        </h2>
        <p className="text-gray-600">{contactPage.contactHelperText}</p>
      </div>

      {contactInfo.map((info, index) => (
        <ContactInfoCard key={`${info} + ${index}`} info={info} index={index} />
      ))}
    </motion.div>
  );
}
