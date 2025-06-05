"use client";
import { motion } from "framer-motion";

interface props {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  multiline?: boolean;
  placeholder?: string;
}

// Form Input Component
export default function FormInput({
  label,
  type = "text",
  value,
  onChange,
  error,
  required,
  multiline,
  placeholder,
}: props) {
  const inputClasses = `w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
    error ? "border-red-500 bg-red-50" : "border-gray-300"
  }`;

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={4}
          className={inputClasses}
          aria-invalid={!!error}
          aria-describedby={error ? `${label}-error` : undefined}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={inputClasses}
          aria-invalid={!!error}
          aria-describedby={error ? `${label}-error` : undefined}
        />
      )}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-sm"
          id={`${label}-error`}
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}
