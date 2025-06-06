"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiAlertCircle, FiEye, FiEyeOff } from "react-icons/fi";
import { ChangeEvent, ReactNode } from "react";

interface InputFieldProps {
  label?: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  icon?: ReactNode;
  placeholder?: string;
  showPasswordToggle?: boolean;
  onTogglePassword?: () => void;
  showPassword?: boolean;
}

function InputField(props: InputFieldProps) {
  const {
    label,
    type,
    name,
    value,
    onChange,
    error,
    icon,
    placeholder,
    showPasswordToggle,
    onTogglePassword,
    showPassword,
  } = props;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-2"
    >
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-400">{icon}</span>
        </div>
        <input
          id={name}
          name={name}
          type={
            showPasswordToggle ? (showPassword ? "text" : "password") : type
          }
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`block w-full pl-10 pr-12 py-2 border rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
            error
              ? "border-red-300 bg-red-50"
              : "border-gray-300 bg-white hover:border-gray-400"
          }`}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${name}-error` : undefined}
        />
        {showPasswordToggle && onTogglePassword && (
          <button
            type="button"
            onClick={onTogglePassword}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            <span className="text-gray-400 hover:text-gray-600 transition-colors">
              {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
            </span>
          </button>
        )}
      </div>
      {error && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="flex items-center space-x-2 text-red-600 text-sm"
          id={`${name}-error`}
          role="alert"
        >
          <FiAlertCircle size={14} />
          <span>{error}</span>
        </motion.div>
      )}
    </motion.div>
  );
}

export default InputField;
