"use client";

import { ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

type WideServiceProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export default function WideService({
  title,
  description,
  icon: Icon,
}: WideServiceProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-10 transition-all duration-500 hover:-translate-y-2 hover:border-rose-500/30 hover:shadow-[0_0_60px_rgba(244,63,94,0.15)]">

      {/* Glow */}
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-rose-500/10 blur-[120px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="grid items-center gap-10 lg:grid-cols-2">

        {/* Left */}
        <div>

          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-rose-500/20 bg-rose-500/10">
            <Icon className="h-8 w-8 text-rose-500" />
          </div>

          <h3 className="text-4xl font-bold text-white">
            {title}
          </h3>

          <p className="mt-5 max-w-lg text-lg leading-8 text-zinc-400">
            {description}
          </p>

          <div className="mt-8 flex items-center gap-2 font-medium text-rose-500">
            Learn More
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </div>

        </div>

        {/* Right Fake Dashboard */}
        <div className="rounded-2xl border border-white/10 bg-black/30 p-5 backdrop-blur">

          {/* Top Bar */}
          <div className="mb-5 flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-400/70" />
            <div className="h-3 w-3 rounded-full bg-yellow-400/70" />
            <div className="h-3 w-3 rounded-full bg-green-400/70" />
          </div>

          {/* Header */}
          <div className="mb-6 h-4 w-40 rounded bg-white/15" />

          {/* Cards */}
          <div className="grid grid-cols-2 gap-4">

            <div className="rounded-xl border border-white/5 bg-white/5 p-4">
              <div className="mb-3 h-3 w-16 rounded bg-rose-500/40" />
              <div className="h-10 rounded bg-white/10" />
            </div>

            <div className="rounded-xl border border-white/5 bg-white/5 p-4">
              <div className="mb-3 h-3 w-20 rounded bg-rose-500/40" />
              <div className="h-10 rounded bg-white/10" />
            </div>

          </div>

          {/* Chart */}
          <div className="mt-6 h-28 rounded-xl border border-white/5 bg-gradient-to-br from-rose-500/20 to-transparent" />

        </div>

      </div>

    </div>
  );
}