// Contact Form Component
"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  FiAlertCircle,
  FiCheck,
  FiLoader,
  FiMail,
  FiMessageSquare,
  FiSend,
  FiUser,
} from "react-icons/fi";
import { containerVariants, formVariants, itemVariants } from "./ContactPage";
import { useVariables } from "@/app/context/VariablesContext";
import { getTranslations } from "@/app/helpers/helpers";

// Types
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  [key: string]: string;
}

interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

// Input Field Component
const InputField: React.FC<{
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  icon: React.ReactNode;
  placeholder: string;
}> = ({ label, type, name, value, onChange, error, icon, placeholder }) => (
  <motion.div className="space-y-2" variants={itemVariants}>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
        {icon}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 ${
          error
            ? "border-red-500 bg-red-50"
            : "border-gray-300 hover:border-gray-400"
        }`}
      />
    </div>
    <AnimatePresence>
      {error && (
        <motion.p
          className="text-red-500 text-sm flex items-center gap-1"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <FiAlertCircle size={14} />
          {error}
        </motion.p>
      )}
    </AnimatePresence>
  </motion.div>
);

// Textarea Field Component
const TextareaField: React.FC<{
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  placeholder: string;
  rows?: number;
}> = ({ label, name, value, onChange, error, placeholder, rows = 5 }) => (
  <motion.div className="space-y-2" variants={itemVariants}>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <div className="relative">
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 resize-vertical ${
          error
            ? "border-red-500 bg-red-50"
            : "border-gray-300 hover:border-gray-400"
        }`}
      />
    </div>
    <AnimatePresence>
      {error && (
        <motion.p
          className="text-red-500 text-sm flex items-center gap-1"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <FiAlertCircle size={14} />
          {error}
        </motion.p>
      )}
    </AnimatePresence>
  </motion.div>
);

export default function ContactForm() {
  const { local } = useVariables();
  const { contactPage, validationMessages } = getTranslations(local);

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: ContactFormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = validationMessages.nameRequired;
    }

    if (!formData.email.trim()) {
      newErrors.email = validationMessages.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = validationMessages.emailInvalid;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = validationMessages.subjectRequired;
    }

    if (!formData.message.trim()) {
      newErrors.message = validationMessages.messageRequired;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = validationMessages.messageTooShort;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const inputFields = [
    {
      name: "name",
      type: "text",
      icon: <FiUser size={18} />,
      label: { en: "Full Name", ar: "الاسم الكامل" },
      placeholder: { en: "Enter your full name", ar: "أدخل اسمك الكامل" },
      colSpan: true,
    },
    {
      name: "email",
      type: "email",
      icon: <FiMail size={18} />,
      label: { en: "Email Address", ar: "البريد الإلكتروني" },
      placeholder: {
        en: "Enter your email address",
        ar: "أدخل بريدك الإلكتروني",
      },
      colSpan: true,
    },
    {
      name: "subject",
      type: "text",
      icon: <FiMessageSquare size={18} />,
      label: { en: "Subject", ar: "الموضوع" },
      placeholder: { en: "What's this about?", ar: "ما موضوع رسالتك؟" },
      colSpan: false,
    },
    {
      name: "message",
      type: "textarea",
      label: { en: "Message", ar: "الرسالة" },
      placeholder: {
        en: "Tell us more about your project or inquiry...",
        ar: "أخبرنا المزيد عن مشروعك أو استفسارك...",
      },
      rows: 6,
      colSpan: false,
    },
  ];

  if (isSubmitted) {
    return (
      <motion.div
        className="bg-white rounded-2xl shadow-lg p-8 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <FiCheck className="w-8 h-8 text-green-600" />
        </motion.div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {contactPage.messageSend}
        </h3>
        <p className="text-gray-600">{contactPage.thanksMessage}</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg p-8"
      variants={formVariants}
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {contactPage.sendMessage}
        </h2>
        <p className="text-gray-600">{contactPage.formDescription}</p>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* الحقول التي تظهر في عمودين */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {inputFields
            .filter((field) => field.colSpan)
            .map((field) =>
              field.type === "textarea" ? (
                <TextareaField
                  key={field.name}
                  name={field.name}
                  label={field.label[local]}
                  placeholder={field.placeholder[local]}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  error={errors[field.name as keyof ContactFormErrors]}
                  rows={field.rows}
                />
              ) : (
                <InputField
                  key={field.name}
                  name={field.name}
                  type={field.type}
                  icon={field.icon}
                  label={field.label[local]}
                  placeholder={field.placeholder[local]}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  error={errors[field.name as keyof ContactFormErrors]}
                />
              )
            )}
        </div>

        {/* الحقول التي تظهر بكامل العرض */}
        {inputFields
          .filter((field) => !field.colSpan)
          .map((field) =>
            field.type === "textarea" ? (
              <TextareaField
                key={field.name}
                name={field.name}
                label={field.label[local]}
                placeholder={field.placeholder[local]}
                value={formData[field.name]}
                onChange={handleInputChange}
                error={errors[field.name as keyof ContactFormErrors]}
                rows={field.rows}
              />
            ) : (
              <InputField
                key={field.name}
                name={field.name}
                type={field.type}
                icon={field.icon}
                label={field.label[local]}
                placeholder={field.placeholder[local]}
                value={formData[field.name]}
                onChange={handleInputChange}
                error={errors[field.name as keyof ContactFormErrors]}
              />
            )
          )}

        {/* زر الإرسال */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          variants={itemVariants}
        >
          {isSubmitting ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <FiLoader className="w-5 h-5" />
              </motion.div>
              {contactPage.sending}
            </>
          ) : (
            <>
              <FiSend className="w-5 h-5" />
              {contactPage.sendMessage}
            </>
          )}
        </motion.button>
      </motion.form>
    </motion.div>
  );
}
