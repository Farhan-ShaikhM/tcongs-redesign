"use client";

import { useRef } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";

interface UseProcessScrollReturn {
  containerRef: React.RefObject<HTMLDivElement | null>;
  progress: MotionValue<number>;
  lineProgress: MotionValue<string>;
  normalizedProgress: MotionValue<number>;
}

const START_DELAY = 0.05;
const END_DELAY = 0.12;

export function useProcessScroll(stepCount: number): UseProcessScrollReturn {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // KEY: Single source of truth — 0 → 1 with start/end delays baked in
  const normalizedProgress = useTransform(scrollYProgress, (value) => {
    if (value <= START_DELAY) return 0;
    if (value >= 1 - END_DELAY) return 1;

    return (value - START_DELAY) / (1 - START_DELAY - END_DELAY);
  });

  // Step index: 0 → 5 (derived from normalized, so always in sync with line)
  const progress = useTransform(normalizedProgress, [0, 1], [0, stepCount - 1]);

  // CSS line height: "0%" → "100%"
  const lineProgress = useTransform(normalizedProgress, [0, 1], ["0%", "100%"]);

  return {
    containerRef,
    progress,
    lineProgress,
    normalizedProgress,
  };
}