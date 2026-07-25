"use client";

import { ArrowRight, LucideIcon } from "lucide-react";

export type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export default function ServiceCard({
  title,
  description,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border border-white/10
        bg-gradient-to-br
        from-white/[0.05]
        to-white/[0.02]
        p-8
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-rose-500/30
        hover:shadow-[0_0_50px_rgba(244,63,94,0.15)]
      "
    >
      {/* Glow */}
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-rose-500/10 blur-[100px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Icon */}
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-rose-500/20 bg-rose-500/10 transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-8 w-8 text-rose-500" />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 leading-7 text-zinc-400">
        {description}
      </p>

      {/* Footer */}
      <div className="mt-8 flex items-center gap-2 font-medium text-rose-500">
        Learn More
        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </div>
  );
}