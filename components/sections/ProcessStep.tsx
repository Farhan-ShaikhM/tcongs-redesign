"use client";

import { motion } from "framer-motion";

interface ProcessStepProps {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  active: boolean;
  isCompleted: boolean;
}

export default function ProcessStep({
  number,
  title,
  subtitle,
  description,
  active,
  isCompleted,
}: ProcessStepProps) {
  return (
    <div className="relative flex gap-6 sm:gap-8" style={{ minHeight: "50vh" }}>
      {/* Step number */}
      <div className="w-8 shrink-0 pt-1 text-right sm:w-10">
        <span
          className={`text-sm font-bold transition-colors duration-500 ${
            active || isCompleted ? "text-white" : "text-white/30"
          }`}
        >
          {number}
        </span>
      </div>

      {/* Content */}
      <motion.div
        initial={false}
        animate={{
          opacity: active ? 1 : isCompleted ? 0.5 : 0.35,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex-1 pb-20"
      >
        <h3
          className={`text-2xl font-bold transition-colors duration-500 ${
            active ? "text-white" : "text-white/50"
          }`}
        >
          {title}
        </h3>
        <p className="mt-1 text-sm font-medium text-white/40">{subtitle}</p>
        <p className="mt-3 max-w-md text-base leading-relaxed text-white/60">
          {description}
        </p>
      </motion.div>
    </div>
  );
}