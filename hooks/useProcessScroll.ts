"use client";

import { useRef } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";

interface UseProcessScrollReturn {
  containerRef: React.RefObject<HTMLDivElement | null>;
  progress: MotionValue<number>;
  lineProgress: MotionValue<string>;
}

export function useProcessScroll(stepCount: number): UseProcessScrollReturn {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const progress = useTransform(scrollYProgress, [0, 1], [0, stepCount - 1]);
  const lineProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return { containerRef, progress, lineProgress };
}