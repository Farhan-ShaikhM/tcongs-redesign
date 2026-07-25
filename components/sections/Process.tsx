"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useTransform } from "framer-motion";
import ProcessStep from "./ProcessStep";
import ProcessPreview from "./ProcessPreview";
import { useProcessScroll } from "@/hooks/useProcessScroll";

const STEP_VH = 55;
const DEBUG = false;

const process = [
  {
    number: "01",
    title: "Discovery",
    subtitle: "Business & Market Analysis",
    description:
      "We understand your business goals, target audience, and competitors. This helps us define the right strategy to build a strong digital foundation.",
    image: "/images/process/discovery.jpg",
  },
  {
    number: "02",
    title: "Planning",
    subtitle: "Strategy & Architecture",
    description:
      "We create detailed project plans, user flows, and system architecture to ensure smooth development and clear execution.",
    image: "/images/process/planning.jpg",
  },
  {
    number: "03",
    title: "Design",
    subtitle: "UI/UX & Branding",
    description:
      "Our team designs modern, user-friendly interfaces that enhance user experience and reflect your brand identity.",
    image: "/images/process/design.jpg",
  },
  {
    number: "04",
    title: "Development",
    subtitle: "Web & App Development",
    description:
      "We build fast, scalable, and secure websites and applications using modern technologies tailored to your business needs.",
    image: "/images/process/development.jpg",
  },
  {
    number: "05",
    title: "Testing",
    subtitle: "Quality Assurance",
    description:
      "We test every feature to ensure performance, security, and usability across all devices before launch.",
    image: "/images/process/testing.jpg",
  },
  {
    number: "06",
    title: "Launch & Growth",
    subtitle: "Deployment & Marketing",
    description:
      "After launch, we help you scale with SEO, digital marketing, and continuous optimization to grow your business online.",
    image: "/images/process/launch.jpg",
  },
];

export default function Process() {
  const { containerRef, progress, lineProgress, normalizedProgress } =
    useProcessScroll(process.length);
  const [activeStep, setActiveStep] = useState(0);

  // Step activation from numeric progress (guaranteed sync with dot)
  useMotionValueEvent(progress, "change", (latest) => {
    setActiveStep(Math.round(latest));
  });

  // KEY FIX: imageOpacity now uses numeric MotionValue — no TS error
  const imageOpacity = useTransform(
    normalizedProgress,
    [0, 0.1, 0.9, 1],
    [0, 1, 1, 0]
  );

  const trackHeight = `${process.length * STEP_VH}vh`;

  return (
    <section id="process" className="relative bg-black py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-24 max-w-3xl text-center">
          <span className="rounded-full border border-rose-500/20 bg-rose-500/10 px-4 py-2 text-sm font-medium text-rose-400">
            OUR PROCESS, YOUR GROWTH
          </span>
          <h2 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
            From Idea to Scalable Digital Solution
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            At Tcongs Infotech, we follow a proven process to transform your ideas
            into high-performing digital products. From strategy to execution, we
            focus on delivering scalable and result-driven solutions.
          </p>
        </div>

        {/* LEFT — Scrollable Timeline */}
        <div className="lg:max-w-xl xl:max-w-2xl">
          <div
            ref={containerRef}
            style={{ minHeight: trackHeight }}
            className={`relative ${DEBUG ? "outline outline-2 outline-red-500" : ""}`}
          >
            {/* Vertical track line */}
            <div className="absolute left-[2.5rem] top-0 h-full w-px bg-white/10 sm:left-[3.25rem]">
              <motion.div
                className="absolute left-0 top-0 w-px bg-rose-500"
                style={{ height: lineProgress }}
              />
              <motion.div
                style={{ top: lineProgress }}
                className="absolute -left-[5px] h-[11px] w-[11px] -translate-y-1/2 rounded-full bg-rose-400 shadow-[0_0_14px_4px_rgba(244,63,94,0.55)]"
              />
            </div>

            {/* Steps */}
            <div className="relative">
              {process.map((step, index) => (
                <ProcessStep
                  key={step.number}
                  {...step}
                  active={activeStep === index}
                  isCompleted={activeStep > index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT — Fixed Image */}
      <motion.div
        className="fixed inset-y-0 right-0 z-30 hidden w-1/2 pointer-events-none lg:block"
        style={{ opacity: imageOpacity }}
      >
        <div className="flex h-full items-center px-8 xl:px-16">
          <div className="w-full max-w-lg xl:max-w-xl">
            <ProcessPreview activeStep={activeStep} steps={process} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}