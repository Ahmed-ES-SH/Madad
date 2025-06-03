"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaUserAlt,
  FaEnvelope,
  FaPhone,
  FaRegCommentDots,
} from "react-icons/fa";
import Img from "../../_global/Img";
import { useVariables } from "@/app/context/VariablesContext";
import { getTranslations } from "@/app/helpers/helpers";

const inputVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

export default function ContactUS() {
  const { local } = useVariables();
  const { contactusSection } = getTranslations(local);
  const fields = [
    { id: "name", type: "text", placeholder: "Name", icon: <FaUserAlt /> },
    {
      id: "email",
      type: "email",
      placeholder: "Email address",
      icon: <FaEnvelope />,
    },
    {
      id: "phone",
      type: "tel",
      placeholder: "Phone Number",
      icon: <FaPhone />,
    },
  ];

  return (
    <section id="contactus" className="bg-gray-100  pb-4 pt-10">
      <div className="c-container  border border-gray-300 py-4 shadow-md rounded-2xl lg:px-8">
        {/* Title with hover underline */}
        <div className="relative w-fit group mb-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:text-4xl text-2xl underline font-bold text-primary-red"
          >
            {contactusSection.contactUs}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-3 max-w-md text-gray-600 text-base"
          >
            {contactusSection.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 lg:rounded-l-lg max-lg:rounded-t-lg overflow-hidden shadow-lg"
          >
            <Img
              src="/contact-bg.jpg"
              alt="Contact Background"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 lg:rounded-r-lg max-lg:rounded-b-lg bg-white p-4 lg:p-12 shadow-lg"
          >
            <form className="space-y-6" action="#">
              {/* Name Field */}
              <motion.div
                custom={0}
                variants={inputVariants}
                initial="hidden"
                animate="visible"
                className="relative"
              >
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg shadow-md p-3 focus-within:ring-2 focus-within:ring-sky-400">
                  <FaUserAlt className="text-gray-400 mr-3 text-lg" />
                  <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    className="w-full text-sm outline-none"
                    required
                  />
                </div>
              </motion.div>

              {/* Email & Phone Fields Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {fields
                  .filter((f) => f.id !== "name")
                  .map(({ id, type, placeholder, icon }, i) => (
                    <motion.div
                      key={id}
                      custom={i + 1}
                      variants={inputVariants}
                      initial="hidden"
                      animate="visible"
                      className="relative"
                    >
                      <label className="sr-only" htmlFor={id}>
                        {placeholder}
                      </label>
                      <div className="flex items-center border border-gray-300 rounded-lg shadow-md p-3 duration-300 focus-within:ring-2 focus-within:ring-sky-400">
                        {React.cloneElement(icon, {
                          className: "text-gray-400 mr-3 text-lg",
                        })}
                        <input
                          id={id}
                          type={type}
                          placeholder={placeholder}
                          className="w-full text-sm outline-none"
                          required
                        />
                      </div>
                    </motion.div>
                  ))}
              </div>

              {/* Message Field */}
              <motion.div
                custom={4}
                variants={inputVariants}
                initial="hidden"
                animate="visible"
                className="relative"
              >
                <label className="sr-only" htmlFor="message">
                  {contactusSection.messageLabel}
                </label>
                <div className="flex items-start border border-gray-300 rounded-lg shadow-md p-3 focus-within:ring-2 focus-within:ring-sky-400">
                  <FaRegCommentDots className="text-gray-400 mr-3 mt-2 text-lg" />
                  <textarea
                    id="message"
                    placeholder="Message"
                    className="w-full h-[20vh] text-sm resize-none outline-none"
                    required
                  ></textarea>
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                custom={5}
                variants={inputVariants}
                initial="hidden"
                animate="visible"
                className="mt-6"
              >
                <button
                  type="submit"
                  className="primary-btn bg-primary-red hover:border-primary-red hover:bg-white"
                >
                  {contactusSection.sendMessage}
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
