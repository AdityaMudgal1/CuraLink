"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

// ✅ Proper typing for motion.button props
interface ButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyles =
    "px-5 py-2 rounded-xl font-semibold transition-all duration-200 focus:outline-none active:scale-95";

  const variants: Record<string, string> = {
    primary:
      "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md hover:scale-105 hover:shadow-lg",
    secondary:
      "border border-indigo-600 text-indigo-600 hover:bg-indigo-50 hover:scale-105",
    danger:
      "bg-gradient-to-r from-red-600 to-rose-600 text-white hover:scale-105 shadow-md",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      {...props}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};
