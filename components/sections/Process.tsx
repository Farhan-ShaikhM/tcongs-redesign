"use client";

import { useState } from "react";
import { motion, useMotionValueEvent } from "framer-motion";
import {
  Search,
  FileText,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
} from "lucide-react";
import ProcessStep from "./ProcessStep";
import { useProcessScroll } from "@/hooks/useProcessScroll";

const STEP_VH = 55;

const process = [
  {
    number: "01",
    phase: "PHASE 001",
    title: "Discovery",
    subtitle: "Business & Market Analysis",
    description:
      "We understand your business goals, target audience and competitors to define the right strategy for a strong digital foundation.",
    icon: Search,
  },
  {
    number: "02",
    phase: "PHASE 002",
    title: "Planning",
    subtitle: "Strategy & Architecture",
    description:
      "Detailed project plans, user flows and system architecture that keep development smooth and execution clear.",
    icon: FileText,
  },
  {
    number: "03",
    phase: "PHASE 003",
    title: "Design",
    subtitle: "UI/UX & Branding",
    description:
      "Modern, user-friendly interfaces that enhance experience and reflect your brand identity at every touchpoint.",
    icon: PenTool,
  },
  {
    number: "04",
    phase: "PHASE 004",
    title: "Development",
    subtitle: "Web & App Development",
    description:
      "Fast, secure and scalable builds using modern technologies chosen specifically for your business needs.",
    icon: Code2,
  },
  {
    number: "05",
    phase: "PHASE 005",
    title: "Testing",
    subtitle: "Quality Assurance",
    description:
      "Every feature tested for performance, security and usability across devices before it ever reaches launch.",
    icon: ShieldCheck,
  },
  {
    number: "06",
    phase: "PHASE 006",
    title: "Launch & Growth",
    subtitle: "Deployment & Marketing",
    description:
      "Post-launch, we help you scale with SEO, digital marketing and continuous optimization.",
    icon: Rocket,
  },
];

export default function Process() {
  const { containerRef, progress, lineProgress } = useProcessScroll(
    process.length
  );
  const [activeStep, setActiveStep] = useState(0);

  useMotionValueEvent(progress, "change", (latest) => {
    setActiveStep(Math.round(latest));
  });

  const trackHeight = `${process.length * STEP_VH}vh`;

  return (
    <section id="process" className="relative bg-black py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
  <div className="absolute left-1/2 top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-rose-500/10 blur-[140px]" />
</div>
      {/* Header */}
      <div className="mx-auto mb-20 max-w-7xl px-6">
        <h2 className="max-w-lg text-4xl font-bold text-white md:text-5xl">
          From idea to scalable digital solution
        </h2>
        <p className="mt-4 max-w-xl text-lg text-white/50">
          A proven six-stage path that turns strategy into a launched, growing
          product — with no guesswork in between.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative mx-auto max-w-6xl px-6">
        <div
          ref={containerRef}
          className="relative"
          style={{ minHeight: trackHeight }}
        >
          {/* Center line — desktop only */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 lg:block">
            <motion.div
              className="absolute left-0 top-0 w-full bg-rose-500"
              style={{ height: lineProgress }}
            />
          </div>

          {/* Left line — mobile only */}
          <div className="absolute left-8 top-0 h-full w-px bg-white/10 lg:hidden">
            <motion.div
              className="absolute left-0 top-0 w-full bg-rose-500"
              style={{ height: lineProgress }}
            />
          </div>

          {/* Glowing dot — desktop */}
          <motion.div
            style={{ top: lineProgress }}
            className="absolute left-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
          >
            <div className="h-3 w-3 rounded-full bg-rose-400 shadow-[0_0_16px_6px_rgba(244,63,94,0.45)]" />
          </motion.div>

          {/* Glowing dot — mobile */}
          <motion.div
            style={{ top: lineProgress }}
            className="absolute left-8 z-10 -translate-x-1/2 -translate-y-1/2 lg:hidden"
          >
            <div className="h-3 w-3 rounded-full bg-rose-400 shadow-[0_0_16px_6px_rgba(244,63,94,0.45)]" />
          </motion.div>

          {/* Steps */}
          {process.map((step, index) => {
            const isActive = activeStep === index;
            const isCompleted = activeStep > index;
            const isLeft = index % 2 === 0;

            return (
              <div
                key={step.number}
                className="relative flex min-h-[50vh] items-center py-8 lg:py-0"
              >
                {/* Desktop left card */}
                <div className="hidden w-1/2 pr-8 md:pr-16 lg:block">
                  {isLeft && (
                    <ProcessStep
                      {...step}
                      active={isActive}
                      completed={isCompleted}
                      align="right"
                    />
                  )}
                </div>

                {/* Static step dot */}
                <div className="absolute left-8 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-1/2">
                  <div
                    className={`h-2.5 w-2.5 rounded-full border transition-colors duration-500 ${isActive || isCompleted
                        ? "border-rose-500/40 bg-rose-500/20"
                        : "border-white/20 bg-transparent"
                      }`}
                  />
                </div>

                {/* Desktop right card */}
                <div className="hidden w-1/2 pl-8 md:pl-16 lg:ml-auto lg:block">
                  {!isLeft && (
                    <ProcessStep
                      {...step}
                      active={isActive}
                      completed={isCompleted}
                      align="left"
                    />
                  )}
                </div>

                {/* Mobile card (always left-aligned, right of timeline) */}
                <div className="ml-16 w-full lg:hidden">
                  <ProcessStep
                    {...step}
                    active={isActive}
                    completed={isCompleted}
                    align="left"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}