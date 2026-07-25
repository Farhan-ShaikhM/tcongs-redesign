"use client";

import { ArrowRight, Check } from "lucide-react";
import { LucideIcon } from "lucide-react";

type FeaturedServiceProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  tech: string[];
};

export default function FeaturedService({
  title,
  description,
  icon: Icon,
  tech,
}: FeaturedServiceProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-10 transition-all duration-500 hover:-translate-y-2 hover:border-rose-500/30 hover:shadow-[0_0_60px_rgba(244,63,94,0.15)]">

      {/* Glow */}
      <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-rose-500/10 blur-[120px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Icon */}
      <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-rose-500/20 bg-rose-500/10">
        <Icon className="h-10 w-10 text-rose-500" />
      </div>

      {/* Title */}
      <h3 className="text-4xl font-bold text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
        {description}
      </p>

      {/* Divider */}
      <div className="my-8 h-px bg-gradient-to-r from-rose-500/20 to-transparent" />

      {/* Tech */}
      <div className="grid grid-cols-2 gap-4">
        {tech.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 text-zinc-300"
          >
            <Check className="h-4 w-4 text-rose-500" />
            {item}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-10 flex items-center gap-2 font-medium text-rose-500">
        Learn More

        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </div>
  );
}