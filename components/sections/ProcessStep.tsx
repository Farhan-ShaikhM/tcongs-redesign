"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ProcessStepProps {
  number: string;
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  active: boolean;
  completed: boolean;
  align: "left" | "right";
}

export default function ProcessStep({
  number,
  phase,
  title,
  subtitle,
  description,
  icon: Icon,
  active,
  align,
}: ProcessStepProps) {
  return (
    <motion.div
      initial={false}
      animate={{
        opacity: active ? 1 : 0.35,
        scale: active ? 1 : 0.97,
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`relative overflow-hidden rounded-2xl border p-6 backdrop-blur-sm md:p-8 ${active
          ? "border-rose-500/20 bg-rose-500/5 shadow-[0_0_40px_-10px_rgba(244,63,94,0.18)]"
          : "border-white/10 bg-white/[0.02]"
        }`}
    >
      {/* Large faded background number */}
      <span
        className={`absolute top-3 text-7xl font-bold leading-none text-white/[0.03] select-none md:text-8xl ${align === "right" ? "right-3" : "right-3 lg:left-3 lg:right-auto"
          }`}
      >
        {number}
      </span>

      {/* Top row: phase label + icon (swaps based on align) */}
      <div className="relative mb-6 flex items-center justify-between">
        {align === "right" ? (
          <>
            <span className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">
              {phase}
            </span>
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-xl border ${active
                  ? "border-rose-500/25 bg-rose-500/1 text-rose-400"
                  : "border-white/10 bg-white/5 text-white/40"
                }`}
            >
              <Icon className="h-5 w-5" />
            </div>
          </>
        ) : (
          <>
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-xl border ${active
                  ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-400"
                  : "border-white/10 bg-white/5 text-white/40"
                }`}
            >
              <Icon className="h-5 w-5" />
            </div>
            <span className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">
              {phase}
            </span>
          </>
        )}
      </div>

      {/* Content */}
      <div className={`relative ${align === "right" ? "text-right" : "text-left"}`}>
        <h3
          className={`text-xl font-bold md:text-2xl ${active ? "text-white" : "text-white/70"
            }`}
        >
          {title}
        </h3>
        <p className="mt-1 text-sm font-semibold text-rose-400">{subtitle}</p>
        <p className="mt-3 text-sm leading-relaxed text-white/50 md:text-base">
          {description}
        </p>
      </div>
    </motion.div>
  );
}