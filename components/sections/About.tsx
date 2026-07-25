"use client";

import {
  Rocket,
  Gem,
  Target,
  Handshake,
} from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Efficient development with agile workflows.",
  },
  {
    icon: Gem,
    title: "Premium Quality",
    description: "Clean, scalable and maintainable solutions.",
  },
  {
    icon: Target,
    title: "Business Focus",
    description: "Technology aligned with your business goals.",
  },
  {
    icon: Handshake,
    title: "Long-term Partnership",
    description: "Support that continues after launch.",
  },
];

const stats = [
  {
    value: "150+",
    label: "Projects",
  },
  {
    value: "98%",
    label: "Satisfaction",
  },
  {
    value: "5+",
    label: "Years",
  },
  {
    value: "24/7",
    label: "Support",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-rose-500/10 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="rounded-full border border-rose-500/20 bg-rose-500/10 px-4 py-2 text-sm font-medium text-rose-400">
            ABOUT US
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-white">
            We transform ideas into
            <br />
            powerful digital experiences.
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            TCONGS helps startups and businesses build scalable websites,
            mobile applications, and AI-powered products with modern
            technologies and user-focused design.
          </p>

        </div>

        {/* Features */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-rose-500/30 hover:bg-white/[0.05]"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-rose-500/20 bg-rose-500/10">
                  <Icon className="h-8 w-8 text-rose-500" />
                </div>

                <h3 className="text-xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>

        {/* Stats */}

        <div className="mt-20 grid grid-cols-2 gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-10 lg:grid-cols-4">

          {stats.map((item) => (
            <div
              key={item.label}
              className="text-center"
            >
              <h3 className="text-5xl font-black text-rose-500">
                {item.value}
              </h3>

              <p className="mt-3 text-zinc-400">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}