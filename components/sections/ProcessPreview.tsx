"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Step {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

interface ProcessPreviewProps {
  activeStep: number;
  steps: Step[];
}

export default function ProcessPreview({ activeStep, steps }: ProcessPreviewProps) {
  const step = steps[activeStep] || steps[0];

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 shadow-2xl">
      <div className="relative aspect-[4/3] w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={step.number}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={step.image}
              alt={step.title}
              fill
              className="object-cover"
              sizes="50vw"
              priority={activeStep === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Subtle vignette */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>
    </div>
  );
}